import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { useMemo } from "react";
import { Asset, FilterType, ViewMode, SortOption, SortDirection } from "@/lib/types/assets";
import { getAssets, deleteAsset as deleteAssetAction } from "@/app/actions/asset-actions";
interface AssetsState {
  assets: Asset[];
  filter: FilterType;
  viewMode: ViewMode;
  sortBy: SortOption;
  sortDirection: SortDirection;
  isLoading: boolean;
  error: string | null;
  selectedAssetId: string | null;
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
  setFilter: (filter: FilterType) => void;
  setViewMode: (mode: ViewMode) => void;
  setSortBy: (sort: SortOption) => void;
  toggleSortDirection: () => void;
  selectAsset: (id: string | null) => void;
  deleteAsset: (id: string) => Promise<boolean>;
  fetchAssets: (options?: { force?: boolean }) => Promise<void>;
  loadMore: () => Promise<void>;
}
export const useAssetsStore = create<AssetsState>((set, get) => ({
  assets: [],
  filter: "all",
  viewMode: "grid",
  sortBy: "date",
  sortDirection: "desc",
  isLoading: false,
  error: null,
  selectedAssetId: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
    hasMore: false,
  },
  counts: {
    total: 0,
    images: 0,
    videos: 0,
  },
  setFilter: (filter) => {
    set({ filter });
    get().fetchAssets({ force: true });
  },
  setViewMode: (viewMode) => set({ viewMode }),
  setSortBy: (sortBy) => {
    set({ sortBy });
    get().fetchAssets({ force: true });
  },
  toggleSortDirection: () => {
    set((state) => ({
      sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
    }));
    get().fetchAssets({ force: true });
  },
  selectAsset: (selectedAssetId) => set({ selectedAssetId }),
  deleteAsset: async (id) => {
    const { assets, selectedAssetId } = get();
    const result = await deleteAssetAction({ assetId: id });

    if (result.success) {
      set({
        assets: assets.filter((asset) => asset.id !== id),
        selectedAssetId: selectedAssetId === id ? null : selectedAssetId,
        counts: {
          ...get().counts,
          total: get().counts.total - 1,
          images:
            assets.find((a) => a.id === id)?.type === "image"
              ? get().counts.images - 1
              : get().counts.images,
          videos:
            assets.find((a) => a.id === id)?.type === "video"
              ? get().counts.videos - 1
              : get().counts.videos,
        },
      });

      return true;
    }

    set({ error: result.error || "Failed to delete asset" });

    return false;
  },
  fetchAssets: async () => {
    const { filter, sortBy, sortDirection } = get();

    set({ isLoading: true, error: null });

    try {
      const result = await getAssets({
        filter,
        sortBy,
        sortDirection,
        page: 1,
        limit: 20,
      });

      if (result.success) {
        const assets: Asset[] = result.data.assets.map((dto) => ({
          id: dto.id,
          type: dto.type,
          name: dto.name,
          url: dto.url,
          thumbnailUrl: dto.thumbnailUrl,
          size: dto.size,
          dimensions: dto.dimensions,
          duration: dto.duration,
          createdAt: new Date(dto.createdAt),
        }));

        set({
          assets,
          pagination: result.data.pagination,
          counts: result.data.counts,
          isLoading: false,
        });
      } else {
        set({
          error: result.error || "Failed to fetch assets",
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Failed to fetch assets:", error);
      set({
        error: "An unexpected error occurred",
        isLoading: false,
      });
    }
  },
  loadMore: async () => {
    const { filter, sortBy, sortDirection, pagination, assets } = get();

    if (!pagination.hasMore) return;
    set({ isLoading: true });

    try {
      const result = await getAssets({
        filter,
        sortBy,
        sortDirection,
        page: pagination.page + 1,
        limit: pagination.limit,
      });

      if (result.success) {
        const newAssets: Asset[] = result.data.assets.map((dto) => ({
          id: dto.id,
          type: dto.type,
          name: dto.name,
          url: dto.url,
          thumbnailUrl: dto.thumbnailUrl,
          size: dto.size,
          dimensions: dto.dimensions,
          duration: dto.duration,
          createdAt: new Date(dto.createdAt),
        }));

        set({
          assets: [...assets, ...newAssets],
          pagination: result.data.pagination,
          isLoading: false,
        });
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.error("Failed to load more assets:", error);
      set({ isLoading: false });
    }
  },
}));

export const useFilteredAssets = () => {
  const assets = useAssetsStore((state) => state.assets);
  const filter = useAssetsStore((state) => state.filter);
  const sortBy = useAssetsStore((state) => state.sortBy);
  const sortDirection = useAssetsStore((state) => state.sortDirection);

  return useMemo(() => {
    let filtered = assets;

    if (filter === "images") {
      filtered = filtered.filter((a) => a.type === "image");
    } else if (filter === "videos") {
      filtered = filtered.filter((a) => a.type === "video");
    }

    filtered = [...filtered].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "date":
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "size":
          comparison = a.size - b.size;
          break;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [assets, filter, sortBy, sortDirection]);
};

export const useAssetCounts = () => {
  return useAssetsStore(useShallow((state) => state.counts));
};

export const useFilterBarState = () => {
  return useAssetsStore(
    useShallow((state) => ({
      filter: state.filter,
      viewMode: state.viewMode,
      sortBy: state.sortBy,
      sortDirection: state.sortDirection,
      setFilter: state.setFilter,
      setViewMode: state.setViewMode,
      setSortBy: state.setSortBy,
      toggleSortDirection: state.toggleSortDirection,
    }))
  );
};

export const usePagination = () => {
  return useAssetsStore(
    useShallow((state) => ({
      pagination: state.pagination,
      loadMore: state.loadMore,
      isLoading: state.isLoading,
    }))
  );
};
