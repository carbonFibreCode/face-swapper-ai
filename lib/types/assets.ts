export type AssetType = 'image' | 'video';
export type FilterType = 'all' | 'images' | 'videos';
export type ViewMode = 'grid' | 'list';
export type SortOption = 'date' | 'name' | 'size';
export type SortDirection = 'asc' | 'desc';
export interface AssetDimensions {
    width: number;
    height: number;
}
export interface Asset {
    id: string;
    type: AssetType;
    name: string;
    url: string;
    key?: string;
    thumbnailUrl: string;
    size: number;
    dimensions: AssetDimensions;
    createdAt: Date;
    duration?: number;
}
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
export function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date);
}