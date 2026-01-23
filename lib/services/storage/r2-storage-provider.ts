import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { IStorageProvider } from "./storage-provider.interface";
export class R2StorageProvider implements IStorageProvider {
  private client: S3Client;
  private bucketName: string;
  constructor() {
    this.bucketName = process.env.R2_BUCKET_NAME!;
    this.client = new S3Client({
      region: process.env.R2_REGION || "auto",
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
    });
  }
  async getPresignedUrl(
    key: string,
    contentType: string,
    options?: { metadata?: Record<string, string>; contentLength?: number }
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      ContentType: contentType,
      ContentLength: options?.contentLength,
      Metadata: options?.metadata,
    });
    return getSignedUrl(this.client, command, { expiresIn: options ? 600 : 3600 });
  }
  async getPresignedGetUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    return getSignedUrl(this.client, command, { expiresIn: 3600 });
  }
  async upload(buffer: Buffer, key: string, contentType: string): Promise<string> {
    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      })
    );
    return `${process.env.NEXT_PUBLIC_R2_DOMAIN}/${key}`;
  }
  async delete(key: string): Promise<boolean> {
    if (!key) return false;
    try {
      await this.client.send(
        new DeleteObjectCommand({
          Bucket: this.bucketName,
          Key: key,
        })
      );
      return true;
    } catch (error) {
      console.error("Error deleting file from R2:", error);
      return false;
    }
  }
  async list(prefix: string): Promise<string[]> {
    try {
      const command = new ListObjectsV2Command({
        Bucket: this.bucketName,
        Prefix: prefix,
      });
      const response = await this.client.send(command);
      return (response.Contents || [])
        .map((obj) => obj.Key)
        .filter((key): key is string => key !== undefined);
    } catch (error) {
      console.error("Error listing files from R2:", error);
      return [];
    }
  }
}
