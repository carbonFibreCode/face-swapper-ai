import { ISettingsRepository, SettingsRepository } from "./settings-repository";
import {
  SettingsDTO,
  UpdateProfileDTO,
  SettingsServiceResult,
  SettingsErrorCode,
  updateProfileSchema,
} from "./types";
export class SettingsService {
  private repository: ISettingsRepository;
  constructor(repository?: ISettingsRepository) {
    this.repository = repository || new SettingsRepository();
  }
  async getUserSettings(userId: string): Promise<SettingsServiceResult<SettingsDTO>> {
    try {
      if (!userId) {
        return {
          success: false,
          error: "User ID is required",
          code: SettingsErrorCode.VALIDATION_ERROR,
        };
      }

      const settings = await this.repository.getUserSettings(userId);

      if (!settings) {
        return {
          success: false,
          error: "User not found",
          code: SettingsErrorCode.NOT_FOUND,
        };
      }

      return { success: true, data: settings };
    } catch (error) {
      console.error("[SettingsService.getUserSettings] Error:", error);

      return {
        success: false,
        error: "Failed to fetch settings",
        code: SettingsErrorCode.INTERNAL_ERROR,
      };
    }
  }
  async updateProfile(
    userId: string,
    data: UpdateProfileDTO
  ): Promise<SettingsServiceResult<SettingsDTO>> {
    try {
      if (!userId) {
        return {
          success: false,
          error: "User ID is required",
          code: SettingsErrorCode.VALIDATION_ERROR,
        };
      }

      const validation = updateProfileSchema.safeParse(data);

      if (!validation.success) {
        return {
          success: false,
          error: validation.error.issues[0].message,
          code: SettingsErrorCode.VALIDATION_ERROR,
        };
      }

      const updatedSettings = await this.repository.updateUser(userId, data);

      return { success: true, data: updatedSettings };
    } catch (error) {
      console.error("[SettingsService.updateProfile] Error:", error);

      return {
        success: false,
        error: "Failed to update profile",
        code: SettingsErrorCode.INTERNAL_ERROR,
      };
    }
  }
  async deleteAccount(userId: string): Promise<SettingsServiceResult<void>> {
    try {
      if (!userId) {
        return {
          success: false,
          error: "User ID is required",
          code: SettingsErrorCode.VALIDATION_ERROR,
        };
      }

      await this.repository.deleteUser(userId);

      return { success: true, data: undefined };
    } catch (error) {
      console.error("[SettingsService.deleteAccount] Error:", error);

      return {
        success: false,
        error: "Failed to delete account",
        code: SettingsErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
export const settingsService = new SettingsService();
