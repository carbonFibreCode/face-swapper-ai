"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import {
  assetService,
  GetAssetsInput,
  GetAssetsInputSchema,
  DeleteAssetInput,
  DeleteAssetInputSchema,
  CreateAssetInput,
  CreateAssetInputSchema,
  AssetServiceResult,
  GetAssetsOutput,
  CreateAssetOutput,
} from "@/lib/services/asset-service";
import { logger } from "@/lib/logger";

async function getAuthenticatedUserId(): Promise<string | null> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session?.user?.id ?? null;
  } catch (error) {
    logger.error("[Auth] Session check failed:", { error });

    return null;
  }
}

export async function getAssets(
  input: Partial<GetAssetsInput> = {}
): Promise<AssetServiceResult<GetAssetsOutput>> {
  noStore();
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return {
      success: false,
      error: "Please sign in to view your assets",
      code: "UNAUTHORIZED",
    };
  }

  let validatedInput: GetAssetsInput;

  try {
    validatedInput = GetAssetsInputSchema.parse(input);
  } catch {
    return {
      success: false,
      error: "Invalid request parameters",
      code: "VALIDATION_ERROR",
    };
  }

  return assetService.getAssets(userId, validatedInput);
}

export async function deleteAsset(
  input: DeleteAssetInput
): Promise<AssetServiceResult<{ success: true }>> {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return {
      success: false,
      error: "Please sign in to delete assets",
      code: "UNAUTHORIZED",
    };
  }

  let validatedInput: DeleteAssetInput;

  try {
    validatedInput = DeleteAssetInputSchema.parse(input);
  } catch {
    return {
      success: false,
      error: "Invalid asset ID",
      code: "VALIDATION_ERROR",
    };
  }

  const result = await assetService.deleteAsset(userId, validatedInput);

  if (result.success) {
    revalidatePath("/assets");
  }

  return result;
}

export async function createAsset(
  input: CreateAssetInput
): Promise<AssetServiceResult<CreateAssetOutput>> {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return {
      success: false,
      error: "Please sign in to upload assets",
      code: "UNAUTHORIZED",
    };
  }

  try {
    CreateAssetInputSchema.parse(input);
  } catch {
    return {
      success: false,
      error: "Invalid asset data",
      code: "VALIDATION_ERROR",
    };
  }

  return assetService.createAsset(userId, input);
}

export async function getAssetCounts(): Promise<
  AssetServiceResult<{
    success: true;
    counts: { total: number; images: number; videos: number };
  }>
> {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return {
      success: false,
      error: "Please sign in",
      code: "UNAUTHORIZED",
    };
  }

  try {
    const result = await assetService.getAssets(userId, {
      filter: "all",
      sortBy: "date",
      sortDirection: "desc",
      page: 1,
      limit: 1,
    });

    if (!result.success) {
      return result;
    }

    return {
      success: true,
      counts: result.data.counts,
    };
  } catch (error) {
    logger.error("[Asset Actions] getAssetCounts error:", { error });

    return {
      success: false,
      error: "Failed to get counts",
      code: "INTERNAL_ERROR",
    };
  }
}
