import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { storageProvider } from "@/lib/services/storage";
import { headers } from "next/headers";
import { logger } from "@/lib/logger";
export async function POST(req: Request) {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const userId = session.user.id;
    try {
        const { fileType, fileSize, checkSum } = await req.json();
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"]
        if (!allowedTypes.includes(fileType)) {
            return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
        }
        const maxFileSize = 5 * 1024 * 1024
        if (fileSize > maxFileSize) {
            return NextResponse.json({ error: "File too large (Max 5MB)" }, { status: 400 })
        }
        const fileId = crypto.randomUUID();
        const extension = fileType.split("/")[1]
        const key = `users/${userId}/${fileId}.${extension}`
        const signedUrl = await storageProvider.getPresignedUrl(key, fileType, {
            contentLength: fileSize,
            metadata: {
                userId: userId
            }
        });
        if (!signedUrl) {
            return NextResponse.json({ error: "Could not generate signed URL" }, { status: 500 })
        }
        const baseUrl = process.env.NEXT_PUBLIC_R2_DOMAIN || process.env.R2_ENDPOINT?.replace(userId, "");  
        const publicUrl = `${baseUrl}/${key}`;
        return NextResponse.json({
            signedUrl,
            key,
            publicUrl,
            fileId,
            fileType,
            fileSize,
            checkSum
        })
    } catch (error) {
        logger.error("Presign error:", { error })
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}