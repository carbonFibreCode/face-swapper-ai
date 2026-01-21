import { Duration, Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
class RateLimiterFactory {
  static createSlidingWindowLimiter(limit: number, window: string): Ratelimit {
    return new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(limit, window as Duration),
      analytics: true,
      prefix: "face-swap-app:ratelimit",
    });
  }
}
const faceSwapLimiter = RateLimiterFactory.createSlidingWindowLimiter(3, "10 m");

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};
export const rateLimitService = {
  async check(identifier: string): Promise<RateLimitResult> {
    const { success, limit, reset, remaining } = await faceSwapLimiter.limit(identifier);

    return {
      success,
      limit,
      remaining,
      reset,
    };
  },
};
