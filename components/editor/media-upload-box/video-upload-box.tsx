"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { Video, RefreshCw, X } from "lucide-react";
import { useDropzone, FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { VideoPlayer } from "@/components/ui/video-player";
import { editorContent } from "@/lib/content/editor";
export interface VideoUploadBoxProps {
  onFileSelect: (file: File | null) => void;
  file?: File | null;
  assetUrl?: string | null;
  thumbnailUrl?: string;
  maxSize?: number;
  className?: string;
  disabled?: boolean;
}

export function VideoUploadBox({
  onFileSelect,
  file,
  assetUrl,
  thumbnailUrl,
  maxSize = 200 * 1024 * 1024,
  className,
  disabled = false,
}: VideoUploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (assetUrl) {
      setPreviewUrl(assetUrl);

      return;
    }

    if (!file) {
      setPreviewUrl(null);

      return;
    }

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file, assetUrl]);
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        const error = fileRejections[0].errors[0];

        if (error.code === "file-too-large") {
          toast.error(
            `${editorContent.upload.fileTooLarge} ${Math.round(maxSize / 1024 / 1024)}MB`
          );
        } else if (error.code === "file-invalid-type") {
          toast.error(editorContent.upload.invalidVideoType);
        } else {
          toast.error(error.message);
        }

        return;
      }

      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect, maxSize]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "video/*": [".mp4", ".mov", ".avi", ".webm"] },
    maxSize,
    multiple: false,
    noClick: !!file,
  });

  const handleChangeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleClearClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        toast.error(`${editorContent.upload.fileTooLarge} ${Math.round(maxSize / 1024 / 1024)}MB`);

        return;
      }

      onFileSelect(selectedFile);
    }

    e.target.value = "";
  };

  const hasFile = (!!file || !!assetUrl) && !!previewUrl;

  return (
    <div className={cn("relative", disabled && "opacity-50 pointer-events-none", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "rounded-2xl border-2",
          "aspect-[4/3] w-full",
          "flex items-center justify-center",
          hasFile
            ? "border-transparent bg-black cursor-default"
            : isDragActive
              ? "border-primary bg-primary/10 scale-[0.98] cursor-pointer"
              : "glass-card hover:border-primary/50 cursor-pointer"
        )}
      >
        <input {...getInputProps()} />
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileChange}
        />
        {hasFile ? (
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer src={previewUrl} poster={thumbnailUrl} className="w-full h-full" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div
              className={cn(
                "p-4 rounded-2xl transition-all duration-300",
                isDragActive
                  ? "bg-primary text-primary-foreground scale-110"
                  : "bg-background/80 text-muted-foreground"
              )}
            >
              <Video className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {editorContent.upload.videoLabel}
              </p>
              <p className="text-xs text-muted-foreground">
                {isDragActive
                  ? editorContent.upload.releaseToDrop
                  : editorContent.upload.videoFormats}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-3 left-3 z-10">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
          <Video className="w-3 h-3" />
          <span>{editorContent.upload.labels.video}</span>
        </div>
      </div>
      {hasFile && (
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <button
            onClick={handleChangeClick}
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
            aria-label="Change video"
            title="Change video"
          >
            <RefreshCw className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleClearClick}
            className="p-1.5 rounded-full bg-black/60 hover:bg-red-500/80 backdrop-blur-sm transition-colors"
            aria-label="Remove video"
            title="Remove video"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
