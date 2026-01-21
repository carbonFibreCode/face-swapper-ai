import { z } from "zod";
export interface SettingsDTO {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    theme: string | null;
}
export interface UpdateProfileDTO {
    name?: string;
    theme?: string;
    image?: string;
}
export type SettingsServiceResult<T> =
    | { success: true; data: T }
    | { success: false; error: string; code: SettingsErrorCode };
export enum SettingsErrorCode {
    UNAUTHORIZED = "UNAUTHORIZED",
    NOT_FOUND = "NOT_FOUND",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    INTERNAL_ERROR = "INTERNAL_ERROR",
}
export const updateProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    theme: z.enum(["light", "dark", "system"]).optional(),
    image: z.string().url("Invalid image URL").optional(),
});