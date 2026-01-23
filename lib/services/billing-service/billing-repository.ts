import { prisma } from "@/lib/prisma";
import { JobStatus } from "@/lib/generated/prisma/client";
import { SubscriptionPlan, RecentTransactionDTO } from "./types";
export interface IBillingRepository {
  findUserBilling(userId: string): Promise<{
    credits: number;
    plan: SubscriptionPlan;
  } | null>;
  getTotalConsumed(userId: string): Promise<number>;
  getRecentTransactions(userId: string, limit?: number): Promise<RecentTransactionDTO[]>;
}
class BillingRepository implements IBillingRepository {
  async findUserBilling(userId: string): Promise<{
    credits: number;
    plan: SubscriptionPlan;
  } | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        credits: true,
        plan: true,
      },
    });
    if (!user) return null;
    return {
      credits: user.credits,
      plan: user.plan as SubscriptionPlan,
    };
  }
  async getTotalConsumed(userId: string): Promise<number> {
    const result = await prisma.generation.aggregate({
      where: {
        userId,
        status: { in: [JobStatus.COMPLETED, JobStatus.QUEUED] },
      },
      _sum: {
        cost: true,
      },
    });
    return result._sum.cost ?? 0;
  }
  async getRecentTransactions(userId: string, limit: number = 5): Promise<RecentTransactionDTO[]> {
    const generations = await prisma.generation.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: {
        id: true,
        cost: true,
        status: true,
        createdAt: true,
      },
    });
    return generations.map((gen) => ({
      id: gen.id,
      type: "GENERATION" as const,
      cost: gen.cost,
      status: gen.status,
      createdAt: gen.createdAt,
    }));
  }
}
export const billingRepository = new BillingRepository();
