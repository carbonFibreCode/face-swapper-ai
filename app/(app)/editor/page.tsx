"use client";

import React, { useEffect, useRef, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, Download } from "lucide-react";
import { toast } from "sonner";
import { getUploadUrl } from "@/app/actions/upload-actions";
import { generateFaceSwap } from "@/app/actions/face-swap";
import { checkJobStatus } from "@/app/actions/check-status";
import { JobStatus } from "@/lib/types";
import { MediaBoxGrid, VideoUploadBox, FaceUploadBox } from "@/components/editor/media-upload-box";
import { useEditorStore, UploadedFileInfo } from "@/lib/stores/editor-store";
import { editorContent } from "@/lib/content/editor";
import { commonContent } from "@/lib/content/common";

export default function EditorPage() {
  const {
    selectedVideo,
    selectedImage,
    uploadedVideo,
    uploadedImage,
    jobId,
    status,
    resultVideoUrl,
    setUploadedVideo,
    setUploadedImage,
    setJobId,
    setStatus,
    setResultVideoUrl,
    resetAll,
  } = useEditorStore();
  const videoFileRef = useRef<File | null>(null);
  const imageFileRef = useRef<File | null>(null);
  const pollingInterval = useRef<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = React.useState(false);

  useEffect(() => {
    if (jobId && !resultVideoUrl && status !== JobStatus.FAILED) {
      pollingInterval.current = setInterval(async () => {
        const result = await checkJobStatus(jobId);

        if (result.success) {
          if (result.status === JobStatus.COMPLETED && result.videoUrl) {
            setResultVideoUrl(result.videoUrl);
            setStatus(JobStatus.COMPLETED);
            setJobId(null);
            toast.success(editorContent.status.completed);
            if (pollingInterval.current) clearInterval(pollingInterval.current);
          } else if (result.status === JobStatus.FAILED) {
            setStatus(JobStatus.FAILED);
            toast.error(result.message || editorContent.status.failed);
            setJobId(null);
            if (pollingInterval.current) clearInterval(pollingInterval.current);
          } else {
            setStatus(result.status || JobStatus.QUEUED);
          }
        }
      }, 3000);
    }

    return () => {
      if (pollingInterval.current) clearInterval(pollingInterval.current);
    };
  }, [jobId, resultVideoUrl, status, setResultVideoUrl, setStatus, setJobId]);

  const handleVideoFileSelect = (file: File | null) => {
    videoFileRef.current = file;

    if (file) {
      const info: UploadedFileInfo = {
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      };

      setUploadedVideo(info);
    } else {
      setUploadedVideo(null);
    }
  };

  const handleImageFileSelect = (file: File | null) => {
    imageFileRef.current = file;

    if (file) {
      const info: UploadedFileInfo = {
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      };

      setUploadedImage(info);
    } else {
      setUploadedImage(null);
    }
  };

  const handleUploadAndSwap = async () => {
    const activeVideoFile = videoFileRef.current;
    const activeImageFile = imageFileRef.current;
    const hasVideo = activeVideoFile || uploadedVideo || selectedVideo;
    const hasImage = activeImageFile || uploadedImage || selectedImage;

    if (!hasVideo || !hasImage) {
      toast.error(editorContent.errors.missingAssets);

      return;
    }

    setIsUploading(true);
    setResultVideoUrl(null);
    setStatus(null);

    try {
      let targetVideoUrl: string | undefined;
      let targetVideoKey: string | undefined;
      let swapImageUrl: string | undefined;
      let swapImageKey: string | undefined;
      let targetAssetId: string | undefined;
      let swapAssetId: string | undefined;

      if (activeVideoFile) {
        toast.info(editorContent.upload.preparingVideo);
        const videoUpload = await getUploadUrl(activeVideoFile.name, activeVideoFile.type);

        if (!videoUpload.success || !videoUpload.url || !videoUpload.publicUrl) {
          throw new Error(editorContent.errors.failedVideoUrl);
        }

        const uploadRes = await fetch(videoUpload.url, {
          method: "PUT",
          body: activeVideoFile,
          headers: { "Content-Type": activeVideoFile.type },
        });

        if (!uploadRes.ok) throw new Error(editorContent.errors.videoUploadFailed);
        targetVideoUrl = videoUpload.publicUrl;
        targetVideoKey = videoUpload.key;
        setUploadedVideo({
          name: activeVideoFile.name,
          type: activeVideoFile.type,
          url: videoUpload.publicUrl,
          key: videoUpload.key,
        });
      } else if (uploadedVideo?.key) {
        targetVideoUrl = uploadedVideo.url;
        targetVideoKey = uploadedVideo.key;
      } else if (selectedVideo) {
        targetVideoUrl = selectedVideo.url;
        targetAssetId = selectedVideo.id;
      }

      if (activeImageFile) {
        toast.info(editorContent.upload.preparingImage);
        const imageUpload = await getUploadUrl(activeImageFile.name, activeImageFile.type);

        if (!imageUpload.success || !imageUpload.url || !imageUpload.publicUrl) {
          throw new Error(editorContent.errors.failedImageUrl);
        }

        const uploadRes = await fetch(imageUpload.url, {
          method: "PUT",
          body: activeImageFile,
          headers: { "Content-Type": activeImageFile.type },
        });

        if (!uploadRes.ok) throw new Error(editorContent.errors.imageUploadFailed);
        swapImageUrl = imageUpload.publicUrl;
        swapImageKey = imageUpload.key;
        setUploadedImage({
          name: activeImageFile.name,
          type: activeImageFile.type,
          url: imageUpload.publicUrl,
          key: imageUpload.key,
        });
      } else if (uploadedImage?.key) {
        swapImageUrl = uploadedImage.url;
        swapImageKey = uploadedImage.key;
      } else if (selectedImage) {
        swapImageUrl = selectedImage.url;
        swapAssetId = selectedImage.id;
      }

      toast.dismiss("upload-toast");
      toast.success(editorContent.status.ready);
      startTransition(async () => {
        const result = await generateFaceSwap({
          targetVideoUrl,
          swapImageUrl,
          targetVideoKey: targetVideoKey || selectedVideo?.key,
          swapImageKey: swapImageKey || selectedImage?.key,
          targetAssetId,
          swapAssetId,
        });

        if (result.success) {
          if (result.data?.videoUrl) {
            setResultVideoUrl(result.data.videoUrl);
            setStatus(JobStatus.COMPLETED);
          } else if (result.data?.jobId) {
            setJobId(result.data.jobId);
            setStatus(JobStatus.QUEUED);
          }
        } else {
          toast.error(result.message || editorContent.errors.startProcessingFailed);
        }
      });
    } catch (error: unknown) {
      console.error(error);
      const message = error instanceof Error ? error.message : commonContent.errors.generic;

      toast.error(message);
      setStatus(JobStatus.FAILED);
    } finally {
      setIsUploading(false);
    }
  };

  const reset = () => {
    videoFileRef.current = null;
    imageFileRef.current = null;
    resetAll();
  };

  const isProcessing = isUploading || isPending || jobId !== null;
  const hasActiveVideo = !!uploadedVideo || !!selectedVideo;
  const hasActiveImage = !!uploadedImage || !!selectedImage;
  const canGenerate = hasActiveVideo && hasActiveImage && !isProcessing && !resultVideoUrl;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background p-4 md:p-8 flex flex-col">
      {}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          {editorContent.title}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">{editorContent.subtitle}</p>
      </div>
      {}
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        {resultVideoUrl ? (
          <div className="w-full space-y-6 animate-in fade-in duration-500">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                src={resultVideoUrl}
                controls
                className="w-full h-full object-contain"
                autoPlay
                loop
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
                ✨ {editorContent.status.aiResult}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button onClick={() => window.open(resultVideoUrl, "_blank")} className="gap-2">
                <Download className="w-4 h-4" /> {editorContent.actions.download}
              </Button>
              <Button variant="outline" onClick={reset}>
                {editorContent.actions.startNew}
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-8 relative">
            {}
            <MediaBoxGrid>
              <VideoUploadBox
                onFileSelect={handleVideoFileSelect}
                file={videoFileRef.current}
                assetUrl={uploadedVideo?.url || selectedVideo?.url}
                thumbnailUrl={selectedVideo?.thumbnailUrl}
                disabled={isProcessing}
              />
              <FaceUploadBox
                onFileSelect={handleImageFileSelect}
                file={imageFileRef.current}
                assetUrl={uploadedImage?.url || selectedImage?.url}
                disabled={isProcessing}
              />
            </MediaBoxGrid>
            {}
            <div className="flex justify-center pt-2">
              <Button
                size="lg"
                className="glass-button px-8 py-6 text-base font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-foreground"
                onClick={handleUploadAndSwap}
                disabled={!canGenerate}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {isUploading
                      ? commonContent.actions.uploading
                      : commonContent.actions.processing}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    {editorContent.actions.generate}
                  </>
                )}
              </Button>
            </div>
            {}
            {isProcessing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-background/80 backdrop-blur-sm rounded-2xl">
                <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-background/90 shadow-2xl border">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    <Sparkles className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {isUploading
                        ? editorContent.status.preparing
                        : editorContent.status.processing}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      {isUploading
                        ? editorContent.status.verifying
                        : editorContent.status.rendering}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
