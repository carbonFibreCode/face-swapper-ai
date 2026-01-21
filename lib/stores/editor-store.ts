import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Asset } from "@/lib/types/assets";
import { JobStatus } from "@/lib/types";
export interface UploadedFileInfo {
  name: string;
  type: string;
  url: string;
  key?: string;
}
interface EditorState {
  selectedVideo: Asset | null;
  selectedImage: Asset | null;
  uploadedVideo: UploadedFileInfo | null;
  uploadedImage: UploadedFileInfo | null;
  jobId: string | null;
  status: JobStatus | null;
  resultVideoUrl: string | null;
  setSelectedVideo: (asset: Asset | null) => void;
  setSelectedImage: (asset: Asset | null) => void;
  setUploadedVideo: (file: UploadedFileInfo | null) => void;
  setUploadedImage: (file: UploadedFileInfo | null) => void;
  setJobId: (id: string | null) => void;
  setStatus: (status: JobStatus | null) => void;
  setResultVideoUrl: (url: string | null) => void;
  resetAssets: () => void;
  resetGeneration: () => void;
  resetAll: () => void;
}
export const useEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      selectedVideo: null,
      selectedImage: null,
      uploadedVideo: null,
      uploadedImage: null,
      jobId: null,
      status: null,
      resultVideoUrl: null,
      setSelectedVideo: (asset) =>
        set({
          selectedVideo: asset,
          uploadedVideo: null,
        }),
      setSelectedImage: (asset) =>
        set({
          selectedImage: asset,
          uploadedImage: null,
        }),
      setUploadedVideo: (file) =>
        set({
          uploadedVideo: file,
          selectedVideo: null,
        }),
      setUploadedImage: (file) =>
        set({
          uploadedImage: file,
          selectedImage: null,
        }),
      setJobId: (id) => set({ jobId: id }),
      setStatus: (status) => set({ status }),
      setResultVideoUrl: (url) => set({ resultVideoUrl: url }),
      resetAssets: () =>
        set({
          selectedVideo: null,
          selectedImage: null,
          uploadedVideo: null,
          uploadedImage: null,
        }),
      resetGeneration: () =>
        set({
          jobId: null,
          status: null,
          resultVideoUrl: null,
        }),
      resetAll: () =>
        set({
          selectedVideo: null,
          selectedImage: null,
          uploadedVideo: null,
          uploadedImage: null,
          jobId: null,
          status: null,
          resultVideoUrl: null,
        }),
    }),
    {
      name: "editor-state",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        selectedVideo: state.selectedVideo,
        selectedImage: state.selectedImage,
        uploadedVideo: state.uploadedVideo,
        uploadedImage: state.uploadedImage,
        jobId: state.jobId,
        status: state.status,
        resultVideoUrl: state.resultVideoUrl,
      }),
    }
  )
);
export const setVideo = (asset: Asset | null) => useEditorStore.getState().setSelectedVideo(asset);
export const setImage = (asset: Asset | null) => useEditorStore.getState().setSelectedImage(asset);
