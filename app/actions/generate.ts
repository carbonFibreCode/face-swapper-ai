"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { faceSwapService } from "@/lib/services/face-swap-service/face-swap-service";
import { revalidatePath } from "next/cache";
import { getPresignedGetUrl } from "@/lib/s3";
import { logger } from "@/lib/logger";

export async function startGeneration(templateId: string, assetId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { error: "Unauthorized" };
  }

  const userId = session.user.id;

  try {
    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!template || !asset) {
      return { error: "Template or Asset not found" };
    }

    const generation = await prisma.generation.create({
      data: {
        userId,
        templateId,
        assetId,
        status: "QUEUED",
        cost: 1,
      },
    });
    let assetUrl = asset.url;

    try {
      const urlObj = new URL(asset.url);
      const path = urlObj.pathname;
      const key = path.startsWith("/") ? path.substring(1) : path;

      if (key) {
        // console.log(`[Generate] Generating fresh presigned URL for key: ${key}`);
        const freshUrl = await getPresignedGetUrl(key);

        if (freshUrl) {
          assetUrl = freshUrl;
        }
      }
    } catch (e) {
      logger.warn("[Generate] Failed to generate presigned URL, using original:", { error: e });
    }

    // console.log(`[Generate] Starting generation. Template Duration: ${template.duration}`);
    const result = await faceSwapService.swapFace({
      targetVideoUrl: template.videoUrl,
      swapImageUrl: assetUrl,
      videoDuration: template.duration,
    });

    if (result.status === "FAILED") {
      await prisma.generation.update({
        where: { id: generation.id },
        data: {
          status: "FAILED",
          failureReason: result.error || "Unknown error",
        },
      });

      return { error: result.error || "Generation failed to start" };
    }

    await prisma.generation.update({
      where: { id: generation.id },
      data: {
        providerJobId: result.jobId,
        status: "QUEUED",
      },
    });
    revalidatePath("/dashboard");

    return { success: true, generationId: generation.id };
  } catch (error) {
    logger.error("Start Generation Error:", { error });

    return { error: "Internal Server Error" };
  }
}

export async function checkGenerationStatus(generationId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { error: "Unauthorized" };
  }

  try {
    const generation = await prisma.generation.findUnique({
      where: { id: generationId },
    });

    if (!generation) {
      return { error: "Generation not found" };
    }

    if (generation.status === "COMPLETED" || generation.status === "FAILED") {
      return {
        status: generation.status,
        resultUrl: generation.resultUrl,
        failureReason: generation.failureReason,
      };
    }

    if (!generation.providerJobId) {
      return { status: "QUEUED" };
    }

    const statusResult = await faceSwapService.getJobStatus(generation.providerJobId);

    if (
      statusResult.status !== generation.status ||
      statusResult.videoUrl !== generation.resultUrl
    ) {
      const newStatus = statusResult.status === "PENDING" ? "QUEUED" : statusResult.status;

      if (newStatus !== generation.status || (statusResult.videoUrl && !generation.resultUrl)) {
        await prisma.generation.update({
          where: { id: generationId },
          data: {
            status: newStatus as "QUEUED" | "COMPLETED" | "FAILED",
            resultUrl: statusResult.videoUrl,
            failureReason: statusResult.error,
          },
        });
      }

      return {
        status: newStatus,
        resultUrl: statusResult.videoUrl,
        failureReason: statusResult.error,
      };
    }

    return {
      status: generation.status,
      resultUrl: generation.resultUrl,
    };
  } catch (error) {
    logger.error("Check Status Error:", { error });

    return { error: "Failed to check status" };
  }
}
