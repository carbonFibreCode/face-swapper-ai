"use server";
import { faceSwapService } from "@/lib/services/face-swap-service/face-swap-service";
import { FaceSwapInputSchema } from "@/lib/services/face-swap-service/types";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AssetType } from "@/lib/generated/prisma/client";
import { FaceSwapActionState, JobStatus } from "@/lib/types";
import { storageProvider } from "@/lib/services/storage";
import { rateLimitService } from "@/lib/services/rate-limit";
import { logger } from "@/lib/logger";
export async function generateFaceSwap(
    input: { targetVideoUrl?: string; swapImageUrl?: string; targetVideoKey?: string; swapImageKey?: string; targetAssetId?: string; swapAssetId?: string }
): Promise<FaceSwapActionState> {
    let { targetVideoUrl, swapImageUrl } = input;
    const { targetVideoKey, swapImageKey, targetAssetId, swapAssetId } = input;
    if (!targetVideoUrl && !targetVideoKey) {
        return { success: false, message: "Missing target video." };
    }
    if (!swapImageUrl && !swapImageKey) {
        return { success: false, message: "Missing swap image." };
    }
    logger.info("[generateFaceSwap] Input:", { targetVideoKey, swapImageKey, targetAssetId, swapAssetId });
    try {
        if (targetVideoKey) {
            targetVideoUrl = await storageProvider.getPresignedGetUrl(targetVideoKey);
        }
        if (swapImageKey) {
            swapImageUrl = await storageProvider.getPresignedGetUrl(swapImageKey);
        }
        if (!targetVideoUrl || !swapImageUrl) {
            return { success: false, message: "Failed to generate access URLs." };
        }
        const session = await auth.api.getSession({
            headers: await headers()
        });
        if (!session) {
            return {
                success: false,
                message: "You must be logged in to generate a face swap.",
            };
        }
        const userId = session.user.id;
        const rateLimit = await rateLimitService.check(userId);
        if (!rateLimit.success) {
            return {
                success: false,
                message: `Rate limit exceeded. Please try again in ${Math.ceil((rateLimit.reset - Date.now()) / 1000 / 60)} minutes.`,
            };
        }
        const publicVideoUrl = input.targetVideoUrl || `${process.env.NEXT_PUBLIC_R2_DOMAIN}/${targetVideoKey}`;
        const publicImageUrl = input.swapImageUrl || `${process.env.NEXT_PUBLIC_R2_DOMAIN}/${swapImageKey}`;
        let videoAsset;
        if (targetAssetId) {
            videoAsset = await prisma.asset.findUnique({
                where: { id: targetAssetId, userId }
            });
        }
        if (!videoAsset) {
             videoAsset = await prisma.asset.findFirst({
                where: { userId, url: publicVideoUrl }
            });
        }
        if (!videoAsset) {
            videoAsset = await prisma.asset.create({
                data: {
                    userId,
                    url: publicVideoUrl,
                    type: AssetType.VIDEO,
                }
            });
        }
        let imageAsset;
        if (swapAssetId) {
             imageAsset = await prisma.asset.findUnique({
                where: { id: swapAssetId, userId }
            });
        }
        if (!imageAsset) {
            imageAsset = await prisma.asset.findFirst({
                where: { userId, url: publicImageUrl }
            });
        }
        if (!imageAsset) {
            imageAsset = await prisma.asset.create({
                data: {
                    userId,
                    url: publicImageUrl,
                    type: AssetType.IMAGE,
                }
            });
        }
        const generation = await prisma.generation.create({
            data: {
                userId,
                assetId: imageAsset.id,
                status: JobStatus.QUEUED,
                cost: 1,
            }
        });
        const validation = FaceSwapInputSchema.safeParse({
            targetVideoUrl,
            swapImageUrl,
        });
        if (!validation.success) {
            return {
                success: false,
                message: "Generated URLs were invalid.",
            };
        }
        const result = await faceSwapService.swapFace(validation.data);
        if (result.status === "FAILED") {
            await prisma.generation.update({
                where: { id: generation.id },
                data: {
                    status: JobStatus.FAILED,
                    failureReason: result.error || "Internal API Error"
                }
            });
            return {
                success: false,
                message: result.error || "Face swap failed.",
            };
        }
        await prisma.generation.update({
            where: { id: generation.id },
            data: {
                providerJobId: result.jobId,
                status: result.videoUrl ? JobStatus.COMPLETED : JobStatus.QUEUED,
                resultUrl: result.videoUrl,
            }
        });
        return {
            success: true,
            data: {
                videoUrl: result.videoUrl,
                jobId: result.jobId || generation.id,
            },
        };
    } catch (error: unknown) {
        logger.error("Action Error:", { error });
        let message = error instanceof Error ? error.message : "Unknown error";
         if (message.includes("403")) {
            message = "The image URL has expired. Please try uploading the image again.";
        }
        return {
            success: false,
            message: "An unexpected error occurred: " + message,
        };
    }
}