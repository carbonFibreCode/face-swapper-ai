"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { settingsService } from "@/lib/services/settings-service";
import {
  SettingsDTO,
  UpdateProfileDTO,
  SettingsErrorCode,
} from "@/lib/services/settings-service/types";
import { revalidatePath } from "next/cache";
export type SettingsActionState =
  | { success: true; data: SettingsDTO }
  | { success: false; error: string; code?: SettingsErrorCode };
export type VoidActionState =
  | { success: true }
  | { success: false; error: string; code?: SettingsErrorCode };

export async function getSettings(): Promise<SettingsActionState> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return { success: false, error: "Unauthorized", code: SettingsErrorCode.UNAUTHORIZED };
  }

  const result = await settingsService.getUserSettings(session.user.id);

  if (result.success) {
    return { success: true, data: result.data };
  } else {
    return { success: false, error: result.error, code: result.code };
  }
}

export async function updateProfile(data: UpdateProfileDTO): Promise<SettingsActionState> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return { success: false, error: "Unauthorized", code: SettingsErrorCode.UNAUTHORIZED };
  }

  const result = await settingsService.updateProfile(session.user.id, data);

  if (result.success) {
    revalidatePath("/settings");

    return { success: true, data: result.data };
  } else {
    return { success: false, error: result.error, code: result.code };
  }
}

export async function deleteAccount(): Promise<VoidActionState> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return { success: false, error: "Unauthorized", code: SettingsErrorCode.UNAUTHORIZED };
  }

  const result = await settingsService.deleteAccount(session.user.id);

  if (result.success) {
    return { success: true };
  } else {
    return { success: false, error: result.error, code: result.code };
  }
}
