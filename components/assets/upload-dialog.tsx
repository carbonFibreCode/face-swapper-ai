"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, X, FileIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { getUploadUrl } from "@/app/actions/upload-actions";
import { createAsset } from "@/app/actions/asset-actions";
import { useAssetsStore } from "@/lib/stores/assets-store";
import { formatFileSize } from "@/lib/types/assets";
interface UploadDialogProps {
  children: React.ReactNode;
}

export function UploadDialog({ children }: UploadDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const fetchAssets = useAssetsStore((state) => state.fetchAssets);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      "video/*": [".mp4", ".mov", ".webm"],
    },
    maxFiles: 1,
    multiple: false,
  });

  const reset = () => {
    setFile(null);
    setPreview(null);
    setUploadProgress(0);
    setIsUploading(false);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) reset();
  };

  const validateVideo = async (
    file: File
  ): Promise<{ valid: boolean; duration: number; error?: string }> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");

      video.preload = "metadata";

      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);

        if (video.duration < 3) {
          resolve({
            valid: false,
            duration: video.duration,
            error: "Video must be at least 3 seconds long",
          });
        } else {
          resolve({ valid: true, duration: video.duration });
        }
      };

      video.onerror = () => {
        URL.revokeObjectURL(video.src);
        resolve({ valid: false, duration: 0, error: "Failed to load video" });
      };

      video.src = URL.createObjectURL(file);
    });
  };

  const extractVideoThumbnail = async (file: File): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");

      video.preload = "metadata";
      video.muted = true;
      video.playsInline = true;
      video.src = URL.createObjectURL(file);

      video.onloadedmetadata = () => {
        video.currentTime = 0.5;
      };

      video.onseeked = () => {
        try {
          const canvas = document.createElement("canvas");

          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");

          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(
              (blob) => {
                URL.revokeObjectURL(video.src);

                if (blob) {
                  // console.log(`[Thumbnail] Generated blob size: ${blob.size}`);
                  resolve(blob);
                } else {
                  // console.error("[Thumbnail] Canvas toBlob returned null");
                  resolve(null);
                }
              },
              "image/jpeg",
              0.85
            );
          } else {
            // console.error("[Thumbnail] Failed to get 2d context");
            resolve(null);
          }
        } catch {
          // console.error("[Thumbnail] Generation error:", e);
          resolve(null);
        }
      };

      video.onerror = () => {
        // console.error("[Thumbnail] Video load error:", e);
        URL.revokeObjectURL(video.src);
        resolve(null);
      };
    });
  };

  const getImageMetadata = async (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve({ width: img.width, height: img.height });
        URL.revokeObjectURL(img.src);
      };

      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    setUploadProgress(0);
    const isVideo = file.type.startsWith("video/");

    try {
      let metadata: { width: number; height: number; duration?: number };
      let thumbnailUrl: string | undefined;

      setUploadProgress(5);

      if (isVideo) {
        const validation = await validateVideo(file);

        if (!validation.valid) {
          throw new Error(validation.error || "Invalid video");
        }

        const videoEl = document.createElement("video");

        videoEl.preload = "metadata";
        await new Promise<void>((resolve) => {
          videoEl.onloadedmetadata = () => resolve();
          videoEl.src = URL.createObjectURL(file);
        });
        metadata = {
          width: videoEl.videoWidth,
          height: videoEl.videoHeight,
          duration: validation.duration,
        };
        URL.revokeObjectURL(videoEl.src);
      } else {
        metadata = await getImageMetadata(file);
      }

      setUploadProgress(15);

      if (isVideo) {
        const thumbnail = await extractVideoThumbnail(file);

        if (thumbnail) {
          const thumbName = file.name.replace(/\.[^.]+$/, "_thumb.jpg");
          const thumbUrlResult = await getUploadUrl(thumbName, "image/jpeg");

          if (thumbUrlResult.success && thumbUrlResult.url && thumbUrlResult.publicUrl) {
            const thumbResponse = await fetch(thumbUrlResult.url, {
              method: "PUT",
              body: thumbnail,
              headers: { "Content-Type": "image/jpeg" },
            });

            if (thumbResponse.ok) {
              thumbnailUrl = thumbUrlResult.publicUrl;
            }
          }
        }
      }

      setUploadProgress(30);
      const uploadUrlResult = await getUploadUrl(file.name, file.type);

      if (!uploadUrlResult.success || !uploadUrlResult.url || !uploadUrlResult.publicUrl) {
        throw new Error(uploadUrlResult.message || "Failed to get upload URL");
      }

      setUploadProgress(50);
      const response = await fetch(uploadUrlResult.url, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!response.ok) {
        throw new Error("Failed to upload file to storage");
      }

      setUploadProgress(85);
      const createResult = await createAsset({
        name: file.name,
        url: uploadUrlResult.publicUrl,
        thumbnailUrl: thumbnailUrl,
        type: isVideo ? "video" : "image",
        size: file.size,
        width: metadata.width,
        height: metadata.height,
        duration: metadata.duration,
      });

      if (!createResult.success) {
        throw new Error(createResult.error || "Failed to save asset record");
      }

      setUploadProgress(100);
      toast.success("Asset uploaded successfully");
      fetchAssets();
      setIsOpen(false);
    } catch (error: unknown) {
      // console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload asset");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Asset</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {!file ? (
            <div
              {...getRootProps()}
              className={`
                                border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                                ${isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"}
                            `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Upload className="h-8 w-8 mb-2" />
                <p className="font-medium">Drag & drop or click to upload</p>
                <p className="text-xs">Supports Images (JPG, PNG) and Videos (MP4)</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border bg-muted/30">
                {file.type.startsWith("image/") ? (
                  <img src={preview!} alt="Preview" className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-black/5">
                    <FileIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <button
                  onClick={reset}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  disabled={isUploading}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm px-1">
                <span className="font-medium truncate max-w-[200px]">{file.name}</span>
                <span className="text-muted-foreground">{formatFileSize(file.size)}</span>
              </div>
              {isUploading && (
                <div className="space-y-1.5">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    {uploadProgress < 100 ? "Uploading..." : "Processing..."}
                  </p>
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isUploading}>
                  Cancel
                </Button>
                <Button onClick={handleUpload} disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading
                    </>
                  ) : (
                    "Upload"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
