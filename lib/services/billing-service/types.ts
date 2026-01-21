import { z } from 'zod';
export const SubscriptionPlanEnum = z.enum(['FREE', 'PRO']);
export type SubscriptionPlan = z.infer<typeof SubscriptionPlanEnum>;
export interface BillingDTO {
    credits: number;
    plan: SubscriptionPlan;
    consumed: number;
    percentUsed: number;
}
export interface RecentTransactionDTO {
    id: string;
    type: 'GENERATION';
    cost: number;
    status: string;
    createdAt: Date;
}
export interface CreditPackage {
    id: string;
    name: string;
    credits: number;
    price: number;
    popular?: boolean;
}
export interface BillingInfoOutput {
    billing: BillingDTO;
    recentTransactions: RecentTransactionDTO[];
    packages: CreditPackage[];
}
export type BillingServiceResult<T> = 
    | { success: true; data: T }
    | { success: false; error: string; code: BillingErrorCode };
export type BillingErrorCode = 
    | 'USER_NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'INTERNAL_ERROR';
export const CREDIT_PACKAGES: CreditPackage[] = [
    {
        id: 'starter',
        name: 'Starter',
        credits: 10,
        price: 499,
    },
    {
        id: 'popular',
        name: 'Popular',
        credits: 50,
        price: 1999,
        popular: true,
    },
    {
        id: 'pro',
        name: 'Pro',
        credits: 150,
        price: 4999,
    },
];