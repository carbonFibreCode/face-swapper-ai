import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import type { CreditPackage } from "@/lib/services/billing-service";

interface CreditPackagesProps {
  packages: CreditPackage[];
}

export function CreditPackages({ packages }: CreditPackagesProps) {
  return (
    <div className="glass-card rounded-3xl p-8">
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          Get More Credits
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative group rounded-2xl p-6 transition-all duration-300 ${
              pkg.popular
                ? "bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-lg shadow-primary/5 dark:shadow-primary/10"
                : "glass-card border-0 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase shadow-lg">
                Most Popular
              </div>
            )}
            <div className="text-center space-y-4">
              <h3
                className={`font-medium text-lg ${pkg.popular ? "text-primary" : "text-foreground/90"}`}
              >
                {pkg.name}
              </h3>
              <div className="space-y-1">
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  ${(pkg.price / 100).toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {(pkg.price / pkg.credits / 100).toFixed(2)} / credit
                </p>
              </div>
              <div className="py-2">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 text-xl font-semibold text-foreground/90 border border-black/5 dark:border-white/5">
                  {pkg.credits}{" "}
                  <span className="ml-1.5 text-sm font-medium text-muted-foreground">
                    Credits
                  </span>
                </div>
              </div>
              <Button
                className={`w-full transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-primary-foreground"
                    : "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-foreground"
                }`}
                variant={pkg.popular ? "default" : "secondary"}
                disabled
              >
                Coming Soon
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
