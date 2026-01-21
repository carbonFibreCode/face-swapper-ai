import {
    BillingDTO,
    BillingInfoOutput,
    BillingServiceResult,
    CREDIT_PACKAGES,
} from './types';
import { IBillingRepository, billingRepository } from './billing-repository';
export interface IBillingService {
    getBillingInfo(userId: string): Promise<BillingServiceResult<BillingInfoOutput>>;
}
export class BillingService implements IBillingService {
    constructor(private repository: IBillingRepository = billingRepository) {}
    async getBillingInfo(userId: string): Promise<BillingServiceResult<BillingInfoOutput>> {
        try {
            const [userBilling, consumed, recentTransactions] = await Promise.all([
                this.repository.findUserBilling(userId),
                this.repository.getTotalConsumed(userId),
                this.repository.getRecentTransactions(userId, 5),
            ]);
            if (!userBilling) {
                return {
                    success: false,
                    error: 'User not found',
                    code: 'USER_NOT_FOUND',
                };
            }
            const totalCreditsEver = consumed + userBilling.credits;
            const percentUsed = totalCreditsEver > 0 
                ? Math.round((consumed / totalCreditsEver) * 100)
                : 0;
            const billingDTO: BillingDTO = {
                credits: userBilling.credits,
                plan: userBilling.plan,
                consumed,
                percentUsed,
            };
            return {
                success: true,
                data: {
                    billing: billingDTO,
                    recentTransactions,
                    packages: CREDIT_PACKAGES,
                },
            };
        } catch (error) {
            console.error('[BillingService] getBillingInfo error:', {
                userId,
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
            });
            return {
                success: false,
                error: 'Failed to retrieve billing information',
                code: 'INTERNAL_ERROR',
            };
        }
    }
}
export const billingService = new BillingService();