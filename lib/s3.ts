import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
export const s3Client = new S3Client({
  region: process.env.R2_REGION,
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});
export async function getPresignedUrl(key: string, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  return url;
}
export async function getPresignedGetUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  return url;
}
export async function uploadFile(file: File | Blob, key: string) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  );
  return `${process.env.NEXT_PUBLIC_R2_DOMAIN}/${key}`;
}
export async function deleteFile(key: string) {
  if (!key) return;
  try {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: key,
      })
    );
    return true;
  } catch (error) {
    console.error("Error deleting file from R2:", error);
    return false;
  }
}
