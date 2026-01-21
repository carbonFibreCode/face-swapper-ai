export enum JobStatus {
  QUEUED = "QUEUED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}
export interface FaceSwapActionState {
  success: boolean;
  message?: string;
  data?: {
    videoUrl?: string;
    jobId?: string;
  };
}
export interface StatusActionState {
  success: boolean;
  status?: JobStatus;
  videoUrl?: string | null;
  message?: string;
}
