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
    } catch (error: any) {
        console.error("Forgot Password Error:", error);
        return { success: false, error: error.message || "Failed to request password reset" };
    }
}