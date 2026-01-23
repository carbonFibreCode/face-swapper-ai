import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client";
import { SettingsDTO, UpdateProfileDTO } from "./types";
export interface ISettingsRepository {
  getUserSettings(userId: string): Promise<SettingsDTO | null>;
  updateUser(userId: string, data: UpdateProfileDTO): Promise<SettingsDTO>;
  deleteUser(userId: string): Promise<void>;
}
export class SettingsRepository implements ISettingsRepository {
  async getUserSettings(userId: string): Promise<SettingsDTO | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      theme: "system",
    };
  }
  async updateUser(userId: string, data: UpdateProfileDTO): Promise<SettingsDTO> {
    const updateData: Prisma.UserUpdateInput = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.image !== undefined) updateData.image = data.image;
    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      theme: data.theme || "system",
    };
  }
  async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({
      where: { id: userId },
    });
  }
}
