import { Clock, Sparkles } from "lucide-react";
import type { RecentTransactionDTO } from "@/lib/services/billing-service";

interface RecentActivityProps {
  transactions: RecentTransactionDTO[];
}

export function RecentActivity({ transactions }: RecentActivityProps) {
  if (transactions.length === 0) return null;

  return (
    <div className="glass-card rounded-3xl p-8">
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <Clock className="h-5 w-5 text-muted-foreground" />
          Recent Activity
        </h2>
      </div>
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="glass-card border-0 bg-white/40 dark:bg-white/5 flex items-center justify-between p-4 rounded-xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">Face Swap Generation</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-foreground/90">-{tx.cost} credit</p>
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                  tx.status === "COMPLETED"
                    ? "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                    : tx.status === "FAILED"
                      ? "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
                      : "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400"
                }`}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
