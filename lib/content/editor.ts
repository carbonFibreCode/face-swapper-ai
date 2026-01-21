export const editorContent = {
  title: "Face Swap Editor",
  subtitle: "Upload your video and face image to create an AI face swap",
  upload: {
    videoLabel: "Upload Video",
    faceLabel: "Upload Face Image",
    dropzoneText: "Drag & drop or click to upload",
    releaseToDrop: "Release to drop",
    videoFormats: "MP4, MOV, AVI, WEBM",
    imageFormats: "JPG, PNG, WEBP",
    fileTooLarge: "File is too large. Max size is",
    invalidVideoType: "Invalid file type. Please upload a video.",
    invalidImageType: "Invalid file type. Please upload an image (JPG, PNG, WEBP).",
    preparingVideo: "Preparing video upload...",
    preparingImage: "Preparing image upload...",
    labels: {
        video: "Video",
        face: "Face"
    }
  },
  status: {
    ready: "Assets ready! Starting AI processing...",
    preparing: "Preparing Assets...",
    processing: "AI Magic in Progress",
    verifying: "Verifying and preparing your files.",
    rendering: "Mapping facial features and rendering. This may take 1-2 minutes.",
    completed: "Face swap completed!",
    failed: "Face swap failed.",
    aiResult: "AI Result",
  },
  actions: {
    generate: "Generate Face Swap",
    download: "Download Video",
    startNew: "Start New Swap",
  },
  errors: {
    missingAssets: "Please select both a video and a face image.",
    failedVideoUrl: "Failed to generate video upload URL.",
    failedImageUrl: "Failed to generate image upload URL.",
    videoUploadFailed: "Video upload failed.",
    imageUploadFailed: "Image upload failed.",
    startProcessingFailed: "Failed to start processing.",
  },
} as const;