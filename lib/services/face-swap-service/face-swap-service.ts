import { FaceSwapInput } from "./types";
import Client from "magic-hour";
import { logger } from "@/lib/logger";
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
  logger.error("MAGICHOUR_API_KEY is missing from environment variables");
}

export class MagicHourFaceSwapProvider implements FaceSwapProvider {
  async swapFace(input: FaceSwapInput): Promise<FaceSwapResult> {
    if (!client) {
      return { status: "FAILED", error: "Missing Magic Hour API Key" };
    }

    try {
      const response = await client.v1.faceSwap.create({
        assets: {
          videoSource: "file",
          videoFilePath: input.targetVideoUrl,
          imageFilePath: input.swapImageUrl,
          faceSwapMode: "all-faces",
        },
        startSeconds: 0,
        endSeconds: input.videoDuration || 15.0,
        name: "Face Swap Video",
      });

      return {
        status: "QUEUED",
        jobId: response.id,
        providerMetadata: response as Record<string, unknown>,
      };
    } catch (error: unknown) {
      logger.error("Magic Hour Error:", { error });
      interface MagicHourError {
        message?: string;
        response?: {
          json?: () => Promise<unknown>;
          data?: { message?: string };
        };
      }
      const err = error as MagicHourError;
      let errorMessage = err.message || "Unknown Magic Hour Error";

      try {
        if (err.response?.json) {
          const errorBody = (await err.response.json()) as { message?: string };

          logger.error("Magic Hour API Error Detail:", { errorBody });
          errorMessage = errorBody.message || JSON.stringify(errorBody);
        } else if (err.response?.data) {
          logger.error("Magic Hour API Error Detail (data):", { data: err.response.data });
          errorMessage = err.response.data.message || JSON.stringify(err.response.data);
        }
      } catch (e) {
        logger.error("Failed to parse error response:", { error: e });
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
        providerMetadata: project as Record<string, unknown>,
      };
    } catch (error: unknown) {
      logger.error("[Magic Hour] Status Error:", { error });
      const errorMessage = error instanceof Error ? error.message : "Unknown polling error";

      return { status: "FAILED", error: errorMessage };
    }
  }
}
export const faceSwapService = new MagicHourFaceSwapProvider();
