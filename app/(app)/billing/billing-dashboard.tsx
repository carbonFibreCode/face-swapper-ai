'use client';
import { useEffect, useState } from 'react';
import { getBillingInfo } from '@/app/actions/billing-actions';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coins, CreditCard, TrendingUp, Sparkles, Clock, AlertCircle, Loader2 } from 'lucide-react';
import type { BillingDTO, CreditPackage, RecentTransactionDTO } from '@/lib/services/billing-service';
export function BillingDashboard() {
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
                setError('Failed to load billing information');
            } finally {
                setLoading(false);
            }
        }
        loadBilling();
    }, []);
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
                <p className="text-muted-foreground">{error || 'Something went wrong'}</p>
            </div>
        );
    }
    return (
        <div className="space-y-8">
            { }
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Billing</h1>
            </div>
            { }
            <div className="grid gap-6 md:grid-cols-3">
                { }
                <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Current Credits</h3>
                        <Coins className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <div className="text-4xl font-bold tracking-tight text-foreground">{billing.credits}</div>
                        <p className="text-xs text-muted-foreground/60 mt-1 font-medium">
                            Available to use
                        </p>
                    </div>
                </div>
                { }
                <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Credits Consumed</h3>
                        <TrendingUp className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                    <div>
                        <div className="text-4xl font-bold tracking-tight text-foreground">{billing.consumed}</div>
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
                { }
                <div className="glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Current Plan</h3>
                        <CreditCard className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-4xl font-bold tracking-tight text-foreground">{billing.plan}</span>
                            {billing.plan === 'FREE' && (
                                <Badge variant="secondary" className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-foreground/80 border-0">Free Tier</Badge>
                            )}
                            {billing.plan === 'PRO' && (
                                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 border-0 text-white">
                                    Pro
                                </Badge>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground/60 mt-1 font-medium">
                            {billing.plan === 'FREE' ? 'Upgrade for more credits' : 'Thank you for your support!'}
                        </p>
                    </div>
                </div>
            </div>
            { }
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
                                    ? 'bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-lg shadow-primary/5 dark:shadow-primary/10' 
                                    : 'glass-card border-0 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center space-y-4">
                                <h3 className={`font-medium text-lg ${pkg.popular ? 'text-primary' : 'text-foreground/90'}`}>
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
                                        {pkg.credits} <span className="ml-1.5 text-sm font-medium text-muted-foreground">Credits</span>
                                    </div>
                                </div>
                                <Button 
                                    className={`w-full transition-all duration-300 ${
                                        pkg.popular 
                                            ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-primary-foreground' 
                                            : 'bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-foreground'
                                    }`}
                                    variant={pkg.popular ? 'default' : 'secondary'}
                                    disabled
                                >
                                    Coming Soon
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            { }
            {transactions.length > 0 && (
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
                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                                        tx.status === 'COMPLETED' ? 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400' : 
                                        tx.status === 'FAILED' ? 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400' : 'bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400'
                                    }`}>
                                        {tx.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}