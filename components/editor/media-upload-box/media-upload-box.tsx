"use client";
import React, { useCallback, useState, useEffect, ReactNode } from "react";
import { useDropzone, Accept, FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
export interface MediaUploadBoxProps {
  onFileSelect: (file: File | null) => void;
  accept: Accept;
  maxSize?: number;
  label: string;
  description?: string;
  icon?: ReactNode;
  file?: File | null;
  className?: string;
  renderPreview?: (previewUrl: string, file: File) => ReactNode;
}
export function MediaUploadBox({
  onFileSelect,
  accept,
  maxSize = 10 * 1024 * 1024,
  label,
  description = "Drag & drop file",
  icon,
  file,
  className,
  renderPreview,
}: MediaUploadBoxProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        const error = fileRejections[0].errors[0];
        if (error.code === "file-too-large") {
          toast.error(`File is too large. Max size is ${Math.round(maxSize / 1024 / 1024)}MB`);
        } else if (error.code === "file-invalid-type") {
          toast.error("Invalid file type.");
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
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: false,
  });
  const hasFile = file && previewUrl;
  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative overflow-hidden cursor-pointer transition-all duration-300",
        "rounded-2xl border-2",
        "aspect-[4/3] w-full",
        "flex items-center justify-center",
        hasFile
          ? "border-transparent bg-black"
          : isDragActive
            ? "border-primary bg-primary/10 scale-[0.98]"
            : "border-dashed border-muted-foreground/30 bg-muted/50 hover:border-primary/50 hover:bg-muted",
        className
      )}
    >
      <input {...getInputProps()} />
      {hasFile && previewUrl ? (
        <>
          {renderPreview ? (
            renderPreview(previewUrl, file)
          ) : (
            <div className="absolute inset-0 w-full h-full">
              {file.type.startsWith("image") ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : file.type.startsWith("video") ? (
                <video
                  src={previewUrl}
                  className="w-full h-full object-contain rounded-2xl bg-black"
                  controls
                  muted
                />
              ) : null}
            </div>
          )}
          <button
            onClick={handleClear}
            className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
            aria-label="Remove file"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 rounded-2xl">
            <p className="text-white text-xs font-semibold uppercase tracking-wider">
              Click to change
            </p>
          </div>
        </>
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
            {icon || <Upload className="w-8 h-8" />}
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">
              {isDragActive ? "Release to drop" : description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
