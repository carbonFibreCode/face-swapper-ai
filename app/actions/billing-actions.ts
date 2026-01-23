"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  billingService,
  BillingInfoOutput,
  BillingErrorCode,
} from "@/lib/services/billing-service";
export type BillingActionState =
  | { success: true; data: BillingInfoOutput }
  | { success: false; error: string; code?: BillingErrorCode };
export async function getBillingInfo(): Promise<BillingActionState> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) {
      return {
        success: false,
        error: "You must be logged in to view billing information",
        code: "UNAUTHORIZED",
      };
    }
    const result = await billingService.getBillingInfo(session.user.id);
    return result;
  } catch (error) {
    console.error("[BillingAction] getBillingInfo error:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
      code: "INTERNAL_ERROR",
    };
  }
}
