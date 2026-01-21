import { FaceSwapInput } from "./types";
import Client from "magic-hour";
export interface FaceSwapResult {
    jobId?: string;
    videoUrl?: string;
    status: FaceSwapResultStatus;
    error?: string;
    providerMetadata?: Record<string, unknown>;
}
export type FaceSwapResultStatus = "PENDING" | "COMPLETED" | "FAILED" | "QUEUED";
export interface FaceSwapProvider {
    swapFace(input: FaceSwapInput): Promise<FaceSwapResult>;
    getJobStatus(jobId: string): Promise<FaceSwapResult>;
}
const MAGIC_HOUR_API_KEY = process.env.MAGICHOUR_API_KEY;
let client: Client;
if (MAGIC_HOUR_API_KEY) {
    client = new Client({ token: MAGIC_HOUR_API_KEY });
} else {
    console.error("MAGICHOUR_API_KEY is missing from environment variables");
}
export class MagicHourFaceSwapProvider implements FaceSwapProvider {
    async swapFace(input: FaceSwapInput): Promise<FaceSwapResult> {
        if (!client) {
            return { status: "FAILED", error: "Missing Magic Hour API Key" };
        }
        try {
            console.log("--- Magic Hour Face Swap Flow (SDK) ---");
            console.log("Input:", {
                video: input.targetVideoUrl,
                image: input.swapImageUrl,
                duration: input.videoDuration
            });
            console.log("Calling Magic Hour SDK create...");
            const response = await client.v1.faceSwap.create({
                assets: {
                    videoSource: "file",
                    videoFilePath: input.targetVideoUrl,  
                    imageFilePath: input.swapImageUrl,
                    faceSwapMode: "all-faces"
                },
                startSeconds: 0,
                endSeconds: input.videoDuration || 15.0,  
                name: "Face Swap Video"
            });
            console.log("Magic Hour Response:", JSON.stringify(response, null, 2));
            return {
                status: "QUEUED",
                jobId: response.id,
                providerMetadata: response as Record<string, unknown>
            };
        } catch (error: unknown) {
            console.error("Magic Hour Error:", error);
            const err = error as any;
            let errorMessage = err.message || "Unknown Magic Hour Error";
            try {
                if (err.response && typeof err.response.json === 'function') {
                     const errorBody = await err.response.json();
                     console.error("Magic Hour API Error Detail:", JSON.stringify(errorBody, null, 2));
                     errorMessage = errorBody.message || JSON.stringify(errorBody);
                } else if (err.response && err.response.data) {
                     console.error("Magic Hour API Error Detail (data):", err.response.data);
                     errorMessage = err.response.data.message || JSON.stringify(err.response.data);
                }
            } catch (e) {
                console.error("Failed to parse error response:", e);
            }
            return { status: "FAILED", error: errorMessage };
        }
    }
    async getJobStatus(jobId: string): Promise<FaceSwapResult> {
         if (!client) {
            return { status: "FAILED", error: "Missing Magic Hour API Key" };
        }
        try {
            const project = await client.v1.videoProjects.get({ id: jobId });
            console.log(`[Magic Hour] Status: ${project.status}`);
            let status: FaceSwapResultStatus = "PENDING";
            if (project.status === "complete") status = "COMPLETED";
            else if (project.status === "error") status = "FAILED";
            else if (project.status === "canceled") status = "FAILED";
            else status = "PENDING";  
            let videoUrl: string | undefined;
            if (status === "COMPLETED" && project.downloads && project.downloads.length > 0) {
                videoUrl = project.downloads[0].url;
            }
            return {
                status,
                jobId,
                videoUrl,
                error: project.error ? `${project.error.code}: ${project.error.message}` : undefined,
                providerMetadata: project as Record<string, unknown>
            };
        } catch (error: unknown) {
             console.error("[Magic Hour] Status Error:", error);
             const errorMessage = error instanceof Error ? error.message : "Unknown polling error";
             return { status: "FAILED", error: errorMessage };
        }
    }
}
export const faceSwapService = new MagicHourFaceSwapProvider();