"use server";
import { auth } from "@/lib/auth";
import { storageProvider } from "@/lib/services/storage";
import { headers } from "next/headers";
export interface UploadUrlResult {
  success: boolean;
  url?: string;
  key?: string;
  publicUrl?: string;
  message?: string;
}
export async function getUploadUrl(
  filename: string,
  contentType: string
): Promise<UploadUrlResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const uniqueId = Date.now().toString();
    const ext = filename.split(".").pop() || "";
    const nameWithoutExt = filename
      .substring(0, filename.lastIndexOf("."))
      .replace(/[^a-zA-Z0-9]/g, "_");
    const shortName = nameWithoutExt.substring(0, 30);
    const finalFilename = `${shortName}.${ext}`;
    const key = `uploads/${session.user.id}/${uniqueId}-${finalFilename}`;
    const url = await storageProvider.getPresignedUrl(key, contentType);
    const publicUrl = `${process.env.NEXT_PUBLIC_R2_DOMAIN}/${key}`;
    return {
      success: true,
      url,
      key,
      publicUrl,
    };
  } catch (error: unknown) {
    console.error("Error getting presigned URL:", error);
    return {
      success: false,
      message: "Failed to generate upload URL",
    };
  }
}
