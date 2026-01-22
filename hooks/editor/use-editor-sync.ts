import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEditorStore } from "@/lib/stores/editor-store";
import { getAsset } from "@/app/actions/asset-actions";
import { Asset } from "@/lib/types/assets";

export function useEditorSync() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isLoadingAssets, setIsLoadingAssets] = useState(true);

  const {
    selectedVideo,
    selectedImage,
    uploadedVideo,
    uploadedImage,
    setSelectedVideo,
    setSelectedImage,
  } = useEditorStore();

  // Sync URL params to store on mount/update
  useEffect(() => {
    const fetchAssets = async () => {
      const videoId = searchParams.get("video");
      const imageId = searchParams.get("image");

      if (videoId && (!selectedVideo || selectedVideo.id !== videoId) && !uploadedVideo) {
        try {
          const res = await getAsset(videoId);

          if (res.success) {
            const asset: Asset = {
              ...res.data,
              createdAt: new Date(res.data.createdAt),
            };

            setSelectedVideo(asset);
          }
        } catch (e) {
          console.error("Failed to fetch video asset", e);
        }
      }

      if (imageId && (!selectedImage || selectedImage.id !== imageId) && !uploadedImage) {
        try {
          const res = await getAsset(imageId);

          if (res.success) {
            const asset: Asset = {
              ...res.data,
              createdAt: new Date(res.data.createdAt),
            };

            setSelectedImage(asset);
          }
        } catch (e) {
          console.error("Failed to fetch image asset", e);
        }
      }

      setIsLoadingAssets(false);
    };

    fetchAssets();
  }, [
    searchParams,
    selectedVideo,
    selectedImage,
    uploadedVideo,
    uploadedImage,
    setSelectedVideo,
    setSelectedImage,
  ]);

  // Sync store to URL params
  useEffect(() => {
    if (isLoadingAssets) return;
    const params = new URLSearchParams(searchParams.toString());
    let changed = false;

    if (selectedVideo) {
      if (params.get("video") !== selectedVideo.id) {
        params.set("video", selectedVideo.id);
        changed = true;
      }
    } else if (params.has("video")) {
      if (!uploadedVideo) {
        params.delete("video");
        changed = true;
      }
    }

    if (selectedImage) {
      if (params.get("image") !== selectedImage.id) {
        params.set("image", selectedImage.id);
        changed = true;
      }
    } else if (params.has("image")) {
      if (!uploadedImage) {
        params.delete("image");
        changed = true;
      }
    }

    if (changed) {
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [
    selectedVideo,
    selectedImage,
    uploadedVideo,
    uploadedImage,
    isLoadingAssets,
    pathname,
    router,
    searchParams,
  ]);
  
  return { isLoadingAssets };
}
