import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { logger } from "@/lib/logger";
import { getResetPasswordEmailHtml } from "@/lib/email/templates/reset-password";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ url, user }: { url: string; user: { email: string } }) {
      const resendApiKey = process.env.RESEND_API_KEY;

      if (!resendApiKey) {
        if (process.env.NODE_ENV === "development") {
          console.log("-----------------------------------------");
          console.log("🔐 Password Reset Request (Resend API Key missing)");
          console.log(`User: ${user.email}`);
          console.log(`Link: ${url}`);
          console.log("-----------------------------------------");
        } else {
          logger.error("RESEND_API_KEY is missing. Cannot send reset email.");
        }

        return;
      }

      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        const fromEmail = process.env.RESEND_FROM_EMAIL || "no_arun@resend.dev";
        const { error } = await resend.emails.send({
          from: fromEmail,
          to: user.email,
          subject: "Reset your password",
          html: getResetPasswordEmailHtml(url),
        });

        if (error) {
          logger.error("Failed to send reset email via Resend:", { error });
        }
      } catch (error) {
        logger.error("Error sending reset email:", { error });
      }
    },
  },
  logger: {
    level: "debug",
  },
  baseURL: process.env.BETTER_AUTH_BASE_URL,
});
