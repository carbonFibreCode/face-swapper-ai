"use client";

import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { X } from "lucide-react";
interface UploadZoneProps {
  onFileSelect: (file: File | null) => void;
  accept: Record<string, string[]>;
  maxSize?: number;
  label: string;
  className?: string;
  file?: File | null;
}

export function UploadZone({
  onFileSelect,
  accept,
  maxSize = 10 * 1024 * 1024,
  label,
  className,
  file,
}: UploadZoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
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
        const selectedFile = acceptedFiles[0];

        onFileSelect(selectedFile);

        if (selectedFile.type.startsWith("image") || selectedFile.type.startsWith("video")) {
          const url = URL.createObjectURL(selectedFile);

          setPreview(url);
        }
      }
    },
    [onFileSelect, maxSize]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors relative overflow-hidden min-h-[150px] flex items-center justify-center",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-gray-300 hover:border-primary/50 hover:bg-gray-50",
        className
      )}
    >
      <input {...getInputProps()} />
      {file && preview ? (
        <div className="absolute inset-0 w-full h-full bg-black group">
          {file.type.startsWith("image") ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <video
              src={preview}
              className="w-full h-full object-cover shadow-inner"
              controls={false}
              muted
            />
          )}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px] font-bold uppercase tracking-widest">
            <span>Change {file.type.split("/")[0]}</span>
            <span className="text-[8px] opacity-60 mt-1 font-normal italic">
              {(file.size / 1024 / 1024).toFixed(1)} MB
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 py-4">
          <div
            className={cn(
              "p-4 rounded-2xl transition-all duration-300",
              isDragActive
                ? "bg-primary text-primary-foreground scale-110 shadow-xl"
                : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold">{label}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
              {isDragActive ? "Release to drop" : "Drag & drop file"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
