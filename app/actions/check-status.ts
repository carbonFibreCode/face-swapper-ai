"use server";

import { prisma } from "@/lib/prisma";
import { faceSwapService } from "@/lib/services/face-swap-service/face-swap-service";
import { JobStatus, StatusActionState } from "@/lib/types";
import { logger } from "@/lib/logger";

export async function checkJobStatus(generationId: string): Promise<StatusActionState> {
  try {
    const generation = await prisma.generation.findUnique({
      where: { id: generationId },
    });

    if (!generation) {
      return {
        success: false,
        message: "Generation not found.",
      };
    }

    if (generation.status !== JobStatus.QUEUED) {
      return {
        success: true,
        status: generation.status as JobStatus,
        videoUrl: generation.resultUrl,
      };
    }

    if (generation.providerJobId) {
      const result = await faceSwapService.getJobStatus(generation.providerJobId);

      if (result.status === "COMPLETED" && result.videoUrl) {
        const updated = await prisma.generation.update({
          where: { id: generationId },
          data: {
            status: JobStatus.COMPLETED,
            resultUrl: result.videoUrl,
          },
        });

        return {
          success: true,
          status: updated.status as JobStatus,
          videoUrl: updated.resultUrl,
        };
      }

      if (result.status === "FAILED") {
        const updated = await prisma.generation.update({
          where: { id: generationId },
          data: {
            status: JobStatus.FAILED,
            failureReason: result.error || "Provider reported failure",
          },
        });

        return {
          success: true,
          status: updated.status as JobStatus,
          message: updated.failureReason || "Face swap failed",
        };
      }
    }

    return {
      success: true,
      status: generation.status as JobStatus,
    };
  } catch (error: unknown) {
    logger.error("Check Status Error:", { error });
    const message = error instanceof Error ? error.message : "Unknown error";

    return {
      success: false,
      message: "Failed to check status: " + message,
    };
  }
}
