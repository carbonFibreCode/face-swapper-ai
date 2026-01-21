import {
    GetAssetsInput,
    GetAssetsInputSchema,
    GetAssetsOutput,
    DeleteAssetInput,
    DeleteAssetInputSchema,
    CreateAssetInput,
    CreateAssetInputSchema,
    CreateAssetOutput,
    AssetDTO,
    AssetServiceResult,
    mapAssetToDTO,
} from './types';
import { IAssetRepository, assetRepository } from './asset-repository';
import { IStorageProvider, storageProvider } from '../storage';
import { ILogger, ConsoleLogger } from '@/lib/logger';
export interface IAssetService {
    getAssets(userId: string, input: GetAssetsInput): Promise<AssetServiceResult<GetAssetsOutput>>;
    deleteAsset(userId: string, input: DeleteAssetInput): Promise<AssetServiceResult<{ success: true }>>;
    createAsset(userId: string, input: CreateAssetInput): Promise<AssetServiceResult<CreateAssetOutput>>;
}
export class AssetService implements IAssetService {
    constructor(
        private repository: IAssetRepository = assetRepository,
        private storage: IStorageProvider = storageProvider,
        private logger: ILogger = new ConsoleLogger()
    ) { }
    private extractKeyFromUrl(url: string): string | null {
        try {
            const urlObj = new URL(url);
            const path = urlObj.pathname;
            return path.startsWith('/') ? path.substring(1) : path;
        } catch {
            return null;
        }
    }
    async getAssets(userId: string, input: GetAssetsInput): Promise<AssetServiceResult<GetAssetsOutput>> {
        try {
            const validatedInput = GetAssetsInputSchema.parse(input);
            const skip = (validatedInput.page - 1) * validatedInput.limit;
            const [assets, counts] = await Promise.all([
                this.repository.findByUser(userId, {
                    filter: validatedInput.filter,
                    sortBy: validatedInput.sortBy,
                    sortDirection: validatedInput.sortDirection,
                    skip,
                    take: validatedInput.limit,
                }),
                this.repository.countByUser(userId),
            ]);
            const assetDTOs: AssetDTO[] = await Promise.all(
                assets.map(async (asset) => {
                    const dto = mapAssetToDTO(asset);
                    const mainKey = this.extractKeyFromUrl(asset.url);
                    if (mainKey) {
                        dto.url = await this.storage.getPresignedGetUrl(mainKey);
                        dto.key = mainKey;
                    }
                    if (asset.thumbnailUrl && asset.thumbnailUrl !== asset.url) {
                        const thumbKey = this.extractKeyFromUrl(asset.thumbnailUrl);
                        if (thumbKey) {
                            dto.thumbnailUrl = await this.storage.getPresignedGetUrl(thumbKey);
                        }
                    } else if (mainKey) {
                        dto.thumbnailUrl = dto.url;
                    }
                    return dto;
                })
            );
            const totalPages = Math.ceil(counts.total / validatedInput.limit);
            return {
                success: true,
                data: {
                    assets: assetDTOs,
                    pagination: {
                        page: validatedInput.page,
                        limit: validatedInput.limit,
                        total: counts.total,
                        totalPages,
                        hasMore: validatedInput.page < totalPages,
                    },
                    counts,
                },
            };
        } catch (error) {
            this.logger.error('[AssetService] getAssets error:', {
                userId,
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
            });
            if (error instanceof Error && error.name === 'ZodError') {
                return {
                    success: false,
                    error: 'Invalid request parameters',
                    code: 'VALIDATION_ERROR',
                };
            }
            return {
                success: false,
                error: 'Failed to fetch assets',
                code: 'INTERNAL_ERROR',
            };
        }
    }
    async deleteAsset(userId: string, input: DeleteAssetInput): Promise<AssetServiceResult<{ success: true }>> {
        try {
            const validatedInput = DeleteAssetInputSchema.parse(input);
            const deletedAsset = await this.repository.deleteByIdForUser(validatedInput.assetId, userId);
            if (!deletedAsset) {
                return {
                    success: false,
                    error: 'Asset not found or access denied',
                    code: 'NOT_FOUND',
                };
            }
            if (deletedAsset.url) {
                try {
                    const urlObj = new URL(deletedAsset.url);
                    const key = urlObj.pathname.startsWith('/') ? urlObj.pathname.substring(1) : urlObj.pathname;
                    if (key) {
                        await this.storage.delete(key);
                        this.logger.info('[AssetService] Deleted main file from storage:', { key });
                    }
                } catch (e) {
                    this.logger.error('[AssetService] Failed to delete file from storage:', { error: e });
                }
            }
            if (deletedAsset.thumbnailUrl && deletedAsset.thumbnailUrl !== deletedAsset.url) {
                try {
                    const urlObj = new URL(deletedAsset.thumbnailUrl);
                    const key = urlObj.pathname.startsWith('/') ? urlObj.pathname.substring(1) : urlObj.pathname;
                    if (key) {
                        await this.storage.delete(key);
                        this.logger.info('[AssetService] Deleted thumbnail from storage:', { key });
                    }
                } catch (e) {
                    this.logger.error('[AssetService] Failed to delete thumbnail from storage:', { error: e });
                }
            }
            this.logger.info('[AssetService] Asset deleted:', {
                assetId: validatedInput.assetId,
                userId,
            });
            return { success: true };
        } catch (error) {
            this.logger.error('[AssetService] deleteAsset error:', {
                userId,
                input,
                error: error instanceof Error ? error.message : 'Unknown error',
            });
            return {
                success: false,
                error: 'Failed to delete asset',
                code: 'INTERNAL_ERROR',
            };
        }
    }
    async createAsset(userId: string, input: CreateAssetInput): Promise<AssetServiceResult<CreateAssetOutput>> {
        try {
            const validatedInput = CreateAssetInputSchema.parse(input);
            const asset = await this.repository.create(userId, validatedInput);
            const dto = mapAssetToDTO(asset);
            const urlObj = new URL(asset.url);
            const path = urlObj.pathname;
            const key = path.startsWith('/') ? path.substring(1) : path;
            if (key) dto.key = key;
            return {
                success: true,
                data: dto,
            };
        } catch (error) {
            this.logger.error('[AssetService] createAsset error:', { error });
            if (error instanceof Error && error.name === 'ZodError') {
                return {
                    success: false,
                    error: 'Invalid asset data',
                    code: 'VALIDATION_ERROR',
                };
            }
            return {
                success: false,
                error: 'Failed to save asset',
                code: 'INTERNAL_ERROR',
            };
        }
    }
    async listAssetsFromR2(userId: string): Promise<string[]> {
        try {
            return await this.storage.list(`uploads/${userId}/`);
        } catch (error) {
            this.logger.error('[AssetService] listAssetsFromR2 error:', { error });
            return [];
        }
    }
}
export const assetService = new AssetService();