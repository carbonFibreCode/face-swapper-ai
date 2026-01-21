'use client';
import { useEffect, useCallback } from 'react';
import { ImageOff, Upload, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { AssetCard } from './asset-card';
import { UploadDialog } from './upload-dialog';
import { useFilteredAssets, useAssetsStore, usePagination } from '@/lib/stores/assets-store';
import { Button } from '@/components/ui/button';
import { useIntersection } from '@/hooks/use-intersection';
export function AssetGrid() {
    const assets = useFilteredAssets();
    const viewMode = useAssetsStore((state) => state.viewMode);
    const isLoading = useAssetsStore((state) => state.isLoading);
    const error = useAssetsStore((state) => state.error);
    const fetchAssets = useAssetsStore((state) => state.fetchAssets);
    const { pagination, loadMore } = usePagination();
    useEffect(() => {
        fetchAssets();
    }, [fetchAssets]);
    const handleLoadMore = useCallback(() => {
        if (pagination.hasMore && !isLoading) {
            loadMore();
        }
    }, [pagination.hasMore, isLoading, loadMore]);
    const loadMoreRef = useIntersection({ onIntersect: handleLoadMore });
    if (isLoading && assets.length === 0) {
        return (
            <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
                : 'flex flex-col gap-3'
            }>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="glass-card rounded-2xl animate-pulse"
                    >
                        <div className="aspect-[4/3] bg-muted/50 rounded-t-2xl" />
                        <div className="p-2">
                            <div className="h-4 bg-muted/50 rounded w-3/4" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (error && assets.length === 0) {
        return (
            <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Failed to load assets</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                    {error}
                </p>
                <Button
                    onClick={() => fetchAssets()}
                    className="glass-button rounded-xl px-6 gap-2 hover:scale-105 transition-transform"
                >
                    <RefreshCw className="h-4 w-4" />
                    Try Again
                </Button>
            </div>
        );
    }
    if (assets.length === 0) {
        return (
            <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    <ImageOff className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No assets found</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                    Upload your first image or video to get started with face swapping.
                </p>
                <UploadDialog>
                    <Button className="glass-button rounded-xl px-6 gap-2 hover:scale-105 transition-transform">
                        <Upload className="h-4 w-4" />
                        Upload Asset
                    </Button>
                </UploadDialog>
            </div>
        );
    }
    const gridClass = viewMode === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
        : 'flex flex-col gap-3';
    return (
        <>
            <div className={gridClass}>
                {assets.map((asset) => (
                    <AssetCard key={asset.id} asset={asset} />
                ))}
            </div>
            { }
            {pagination.hasMore && (
                <div 
                    ref={loadMoreRef} 
                    className="h-20 flex items-center justify-center mt-4"
                >
                    {isLoading && (
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    )}
                </div>
            )}
        </>
    );
}