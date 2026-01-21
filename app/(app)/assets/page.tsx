import { AssetFilterBar, AssetGrid } from '@/components/assets';
export default function AssetsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">My Assets</h1>
            </div>
            <AssetFilterBar />
            <AssetGrid />
        </div>
    );
}