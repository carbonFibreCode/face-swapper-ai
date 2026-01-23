import { z } from "zod";
export const GetAssetsInputSchema = z.object({
  filter: z.enum(["all", "images", "videos"]).default("all"),
  sortBy: z.enum(["date", "name", "size"]).default("date"),
  sortDirection: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().int().positive().max(1000).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});
export type GetAssetsInput = z.infer<typeof GetAssetsInputSchema>;
export const DeleteAssetInputSchema = z.object({
  assetId: z.string().min(1, "Asset ID is required"),
});
export type DeleteAssetInput = z.infer<typeof DeleteAssetInputSchema>;
export const CreateAssetInputSchema = z.object({
  name: z.string().min(1).max(255),
  url: z.string().url(),
  thumbnailUrl: z.string().url().optional(),
  type: z.enum(["image", "video"]),
  size: z.number().int().min(0),
  width: z.number().int().min(0),
  height: z.number().int().min(0),
  duration: z.number().optional(),
});
export type CreateAssetInput = z.infer<typeof CreateAssetInputSchema>;
export interface AssetDTO {
  id: string;
  type: "image" | "video";
  name: string;
  url: string;
  key?: string;
  thumbnailUrl: string;
  size: number;
  dimensions: {
    width: number;
    height: number;
  };
  duration?: number;
  createdAt: string;
}
export interface GetAssetsOutput {
  success: true;
  data: {
    assets: AssetDTO[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasMore: boolean;
    };
    counts: {
      total: number;
      images: number;
      videos: number;
    };
  };
}
export interface CreateAssetOutput {
  success: true;
  data: AssetDTO;
}
export interface GetAssetOutput {
  success: true;
  data: AssetDTO;
}
export interface ErrorOutput {
  success: false;
  error: string;
  code?: string;
}
export type AssetServiceResult<T> = T | ErrorOutput;
export interface DatabaseAsset {
  id: string;
  userId: string;
  name: string;
  url: string;
  thumbnailUrl: string | null;
  type: "IMAGE" | "VIDEO";
  size: number;
  width: number | null;
  height: number | null;
  duration: number | null;
  createdAt: Date;
}
export function mapAssetToDTO(asset: DatabaseAsset): AssetDTO {
  return {
    id: asset.id,
    type: asset.type.toLowerCase() as "image" | "video",
    name: asset.name,
    url: asset.url,
    thumbnailUrl: asset.thumbnailUrl || asset.url,
    size: asset.size,
    dimensions: {
      width: asset.width || 0,
      height: asset.height || 0,
    },
    duration: asset.duration ?? undefined,
    createdAt: asset.createdAt.toISOString(),
  };
}
