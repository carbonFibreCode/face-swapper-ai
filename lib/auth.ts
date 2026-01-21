import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ url, user }: { url: string; user: { email: string } }) {
      console.log("-----------------------------------------");
      console.log("🔐 Password Reset Request");
      console.log(`User: ${user.email}`);
      console.log(`Link: ${url}`);
      console.log("-----------------------------------------");
    },
  },
  logger: {
    level: "debug",
  },
  baseURL: process.env.BETTER_AUTH_BASE_URL || "http://localhost:3000",
});
