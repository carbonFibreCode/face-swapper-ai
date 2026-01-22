import { Badge } from "@/components/ui/badge";
import { Coins, CreditCard, TrendingUp } from "lucide-react";
import type { BillingDTO } from "@/lib/services/billing-service";

interface BillingStatsProps {
  billing: BillingDTO;
}

export function BillingStats({ billing }: BillingStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {}
      <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Current Credits</h3>
          <Coins className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="text-4xl font-bold tracking-tight text-foreground">
            {billing.credits}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-1 font-medium">Available to use</p>
        </div>
      </div>
      {}
      <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
        <div className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Credits Consumed</h3>
          <TrendingUp className="h-4 w-4 text-muted-foreground/50" />
        </div>
        <div>
          <div className="text-4xl font-bold tracking-tight text-foreground">
            {billing.consumed}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all"
                style={{ width: `${Math.min(billing.percentUsed, 100)}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground/60 font-medium">
              {billing.percentUsed}% used
            </span>
          </div>
        </div>
      </div>
      {}
      <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
        <div className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Current Plan</h3>
          <CreditCard className="h-4 w-4 text-muted-foreground/50" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold tracking-tight text-foreground">
              {billing.plan}
            </span>
            {billing.plan === "FREE" && (
              <Badge
                variant="secondary"
                className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-foreground/80 border-0"
              >
                Free Tier
              </Badge>
            )}
            {billing.plan === "PRO" && (
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 border-0 text-white">
                Pro
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-1 font-medium">
            {billing.plan === "FREE" ? "Upgrade for more credits" : "Thank you for your support!"}
          </p>
        </div>
      </div>
    </div>
  );
}
