import { auth } from "@/lib/auth";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3Client } from "@/lib/s3";
import { headers } from "next/headers";


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

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
            ContentType: fileType,
            ContentLength: fileSize,
            Metadata: {
                userId: userId
            }
        })

        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 600 })

        if (!signedUrl) {
            return NextResponse.json({ error: "Could not generate signed URL" }, { status: 500 })
        }

        const baseUrl = process.env.NEXT_PUBLIC_R2_DOMAIN || process.env.R2_ENDPOINT?.replace(userId, ""); // Fallback
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
        console.error("Presign error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}