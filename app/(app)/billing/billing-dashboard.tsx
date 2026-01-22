"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { useBillingInfo } from "@/hooks/billing/use-billing-info";
import { BillingStats } from "@/components/billing/billing-stats";
import { CreditPackages } from "@/components/billing/credit-packages";
import { RecentActivity } from "@/components/billing/recent-activity";

export function BillingDashboard() {
  const { billing, packages, transactions, loading, error } = useBillingInfo();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !billing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <p className="text-muted-foreground">{error || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Billing</h1>
      </div>

      <BillingStats billing={billing} />

      <CreditPackages packages={packages} />

      <RecentActivity transactions={transactions} />
    </div>
  );
}
