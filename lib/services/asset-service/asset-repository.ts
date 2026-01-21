import prisma from '@/lib/prisma';
import { AssetType } from '@/lib/generated/prisma/enums';
import { DatabaseAsset, CreateAssetInput } from './types';
export interface IAssetRepository {
    findByUser(
        userId: string,
        options: {
            filter: 'all' | 'images' | 'videos';
            sortBy: 'date' | 'name' | 'size';
            sortDirection: 'asc' | 'desc';
            skip: number;
            take: number;
        }
    ): Promise<DatabaseAsset[]>;
    findByIdForUser(assetId: string, userId: string): Promise<DatabaseAsset | null>;
    countByUser(userId: string): Promise<{ total: number; images: number; videos: number }>;
    create(userId: string, input: CreateAssetInput): Promise<DatabaseAsset>;
    deleteByIdForUser(assetId: string, userId: string): Promise<DatabaseAsset | null>;
}
export class AssetRepository implements IAssetRepository {
    async findByUser(
        userId: string,
        options: {
            filter: 'all' | 'images' | 'videos';
            sortBy: 'date' | 'name' | 'size';
            sortDirection: 'asc' | 'desc';
            skip: number;
            take: number;
        }
    ): Promise<DatabaseAsset[]> {
        const where: { userId: string; type?: AssetType } = { userId };
        if (options.filter === 'images') {
            where.type = 'IMAGE';
        } else if (options.filter === 'videos') {
            where.type = 'VIDEO';
        }
        const orderByField = options.sortBy === 'date' ? 'createdAt' :
            options.sortBy === 'name' ? 'url' : 'createdAt';
        const assets = await prisma.asset.findMany({
            where,
            orderBy: { [orderByField]: options.sortDirection },
            skip: options.skip,
            take: options.take,
            select: {
                id: true,
                userId: true,
                name: true,
                url: true,
                thumbnailUrl: true,
                type: true,
                size: true,
                width: true,
                height: true,
                duration: true,
                createdAt: true,
            },
        });
        return assets;
    }
    async findByIdForUser(assetId: string, userId: string): Promise<DatabaseAsset | null> {
        const asset = await prisma.asset.findFirst({
            where: {
                id: assetId,
                userId: userId,
            },
            select: {
                id: true,
                userId: true,
                name: true,
                url: true,
                thumbnailUrl: true,
                type: true,
                size: true,
                width: true,
                height: true,
                duration: true,
                createdAt: true,
            },
        });
        return asset;
    }
    async countByUser(userId: string): Promise<{ total: number; images: number; videos: number }> {
        const [total, images, videos] = await Promise.all([
            prisma.asset.count({ where: { userId } }),
            prisma.asset.count({ where: { userId, type: 'IMAGE' } }),
            prisma.asset.count({ where: { userId, type: 'VIDEO' } }),
        ]);
        return { total, images, videos };
    }
    async create(userId: string, input: CreateAssetInput): Promise<DatabaseAsset> {
        return prisma.asset.create({
            data: {
                userId,
                name: input.name,
                url: input.url,
                thumbnailUrl: input.thumbnailUrl ?? null,
                type: input.type === 'image' ? 'IMAGE' : 'VIDEO',
                size: input.size,
                width: input.width || null,
                height: input.height || null,
                duration: input.duration ?? null,
            },
            select: {
                id: true,
                userId: true,
                name: true,
                url: true,
                thumbnailUrl: true,
                type: true,
                size: true,
                width: true,
                height: true,
                duration: true,
                createdAt: true,
            },
        });
    }
    async deleteByIdForUser(assetId: string, userId: string): Promise<DatabaseAsset | null> {
        const asset = await this.findByIdForUser(assetId, userId);
        if (!asset) {
            return null;
        }
        await prisma.generation.deleteMany({
            where: { assetId },
        });
        await prisma.asset.delete({
            where: { id: assetId },
        });
        return asset;
    }
}
export const assetRepository = new AssetRepository();