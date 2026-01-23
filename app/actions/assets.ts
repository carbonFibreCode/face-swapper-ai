"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
export async function saveAssetToDb(
  publicUrl: string,
  type: "IMAGE" | "VIDEO" = "IMAGE",
  thumbnailUrl?: string,
  metadata?: { width?: number; height?: number; duration?: number; size?: number }
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }
  const asset = await prisma.asset.create({
    data: {
      userId: session.user.id,
      url: publicUrl,
      type,
      thumbnailUrl,
      width: metadata?.width,
      height: metadata?.height,
      duration: metadata?.duration,
      size: metadata?.size || 0,
    },
  });
  return asset;
}
export async function getUserAssets() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return [];
  const userId = session.user.id;
  return await prisma.asset.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
}
