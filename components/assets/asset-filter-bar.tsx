"use client";

import { Upload, LayoutGrid, List, Image as ImageIcon, Video, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { useAssetCounts, useFilterBarState } from "@/lib/stores/assets-store";
import { FilterType } from "@/lib/types/assets";
import { UploadDialog } from "./upload-dialog";
const FILTER_OPTIONS: { value: FilterType; label: string; icon: React.ElementType }[] = [
  { value: "all", label: "All", icon: Layers },
  { value: "images", label: "Images", icon: ImageIcon },
  { value: "videos", label: "Videos", icon: Video },
];

export function AssetFilterBar() {
  const { filter, viewMode, setFilter, setViewMode } = useFilterBarState();
  const counts = useAssetCounts();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {}
      <div className="flex-1 overflow-x-auto">
        <AnimatedTabs
          layout="variable"
          className="w-auto inline-flex"
          value={filter}
          onChange={(val) => setFilter(val as FilterType)}
          items={FILTER_OPTIONS.map((option) => {
            const Icon = option.icon;
            const count =
              option.value === "all"
                ? counts.total
                : option.value === "images"
                  ? counts.images
                  : counts.videos;
            const isActive = filter === option.value;

            return {
              value: option.value,
              label: (
                <>
                  <span>{option.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-semibold transition-colors duration-300 ${isActive ? "bg-primary-foreground/25 text-primary-foreground" : "bg-muted/80 text-muted-foreground"}`}
                  >
                    {count}
                  </span>
                </>
              ),
              icon: <Icon className="h-4 w-4" />,
            };
          })}
        />
      </div>
      {}
      <div className="flex items-center gap-2">
        <div className="glass-card p-1 rounded-xl flex items-center gap-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"}`}
            title="Grid View"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"}`}
            title="List View"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
        <div className="h-8 w-px bg-border mx-2" />
        <UploadDialog>
          <Button className="glass-button rounded-xl px-4 gap-2 hover:scale-105 transition-transform">
            <Upload className="h-4 w-4" />
            <span className="hidden sm:inline">Upload</span>
          </Button>
        </UploadDialog>
      </div>
    </div>
  );
}
