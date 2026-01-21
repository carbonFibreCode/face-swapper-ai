import { z } from "zod";
export const FaceSwapInputSchema = z.object({
    targetVideoUrl: z.string().url("Invalid video URL"),
    swapImageUrl: z.string().url("Invalid image URL"),
    videoDuration: z.number().optional(),
});
export type FaceSwapInput = z.infer<typeof FaceSwapInputSchema>;