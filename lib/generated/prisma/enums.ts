export const SubscriptionPlan = {
  FREE: "FREE",
  PRO: "PRO",
} as const;
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan];
export const AssetType = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;
export type AssetType = (typeof AssetType)[keyof typeof AssetType];
export const JobStatus = {
  QUEUED: "QUEUED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
