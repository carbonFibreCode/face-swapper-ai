"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma"; // Add this import

export async function saveAssetToDb(publicUrl: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const asset = await prisma.asset.create({
    data: {
      userId: session.user.id,
      url: publicUrl,
      type: "IMAGE",
    },
  });

  return asset;
}

export async function getUserAssets() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) return []

  const userId = session.user.id

  return await prisma.asset.findMany({
    where: { userId: userId },
    orderBy: { createdAt: 'desc' },
    take: 20
  })
}