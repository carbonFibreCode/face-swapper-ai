"use client";

import { useState } from "react";
import { Trash2, Download, ExternalLink, Image as ImageIcon, Loader2, Video } from "lucide-react";
import { Asset, formatDuration } from "@/lib/types/assets";
import { useAssetsStore } from "@/lib/stores/assets-store";
import { toast } from "sonner";
import { useEditorStore } from "@/lib/stores/editor-store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const deleteAsset = useAssetsStore((state) => state.deleteAsset);
  const router = useRouter();

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
  };

  const executeDelete = async () => {
    setIsDeleting(true);

    try {
      const success = await deleteAsset(asset.id);

      if (success) {
        toast.success("Asset deleted successfully");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error("Failed to delete asset");
      }
    } catch {
      toast.error("An error occurred while deleting");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(asset.url, "_blank");
  };

  const isVideo = asset.type === "video";

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
          {thumbnailError ? (
            isVideo ? (
              <video src={`${asset.url}#t=0.5`} className="w-full h-full object-cover" muted />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/50">
                <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
              </div>
            )
          ) : (
            <img
              src={asset.thumbnailUrl || asset.url}
              alt={asset.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setThumbnailError(true)}
            />
          )}
          {}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium z-20 pointer-events-none flex items-center gap-1">
            {isVideo ? (
              <>
                <Video className="w-3 h-3" />
                <span>Video</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-3 h-3" />
                <span>Image</span>
              </>
            )}
          </div>
          {isVideo && asset.duration && (
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium z-20 pointer-events-none">
              {formatDuration(asset.duration)}
            </div>
          )}
          {}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 gap-2 transition-opacity duration-200 z-20 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const { setSelectedVideo, setSelectedImage } = useEditorStore.getState();

                if (asset.type === "video") {
                  setSelectedVideo(asset);

                  if (useEditorStore.getState().selectedImage?.type === "video") {
                    setSelectedImage(null);
                  }
                } else {
                  setSelectedImage(asset);

                  if (useEditorStore.getState().selectedVideo?.type === "image") {
                    setSelectedVideo(null);
                  }
                }

                router.push("/editor");
              }}
              className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Use
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              title="Download"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={handleDeleteClick}
              disabled={isDeleting}
              className="p-1.5 rounded-lg bg-red-500/60 backdrop-blur-sm text-white hover:bg-red-500/80 transition-colors disabled:opacity-50"
              title="Delete"
            >
              {isDeleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-medium text-sm truncate" title={asset.name || "Untitled Asset"}>
            {asset.name || "Untitled Asset"}
          </h3>
        </div>
      </div>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Asset</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this asset? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={executeDelete} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
