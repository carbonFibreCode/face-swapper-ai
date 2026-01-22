import { useEffect, useState } from "react";
import { getBillingInfo } from "@/app/actions/billing-actions";
import type {
  BillingDTO,
  CreditPackage,
  RecentTransactionDTO,
} from "@/lib/services/billing-service";

export function useBillingInfo() {
  const [billing, setBilling] = useState<BillingDTO | null>(null);
  const [packages, setPackages] = useState<CreditPackage[]>([]);
  const [transactions, setTransactions] = useState<RecentTransactionDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBilling() {
      try {
        const result = await getBillingInfo();

        if (result.success) {
          setBilling(result.data.billing);
          setPackages(result.data.packages);
          setTransactions(result.data.recentTransactions);
        } else {
          setError(result.error);
        }
      } catch {
        setError("Failed to load billing information");
      } finally {
        setLoading(false);
      }
    }

    loadBilling();
  }, []);

  return { billing, packages, transactions, loading, error };
}
