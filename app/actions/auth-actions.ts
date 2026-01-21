"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function requestPasswordReset(email: string) {
  try {
    const response = await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: "/reset-password",
      },
      headers: await headers(),
    });

    return { success: true, data: response };
  } catch (error: unknown) {
    console.error("Forgot Password Error:", error);
    let errorMessage = "Failed to request password reset";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return { success: false, error: errorMessage };
  }
}
