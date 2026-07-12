import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const isRedisConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL ?? "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? "",
});

export const lockerRedisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_LOCKER_URL ?? "",
  token: process.env.UPSTASH_REDIS_REST_LOCKER_TOKEN ?? "",
});

// Create a new ratelimiter, that allows 10 requests per 10 seconds by default
export const ratelimit = (
  requests: number = 10,
  seconds:
    | `${number} ms`
    | `${number} s`
    | `${number} m`
    | `${number} h`
    | `${number} d` = "10 s",
) => {
  if (!isRedisConfigured) {
    return {
      limit: async () => ({
        success: true,
        limit: requests,
        remaining: requests,
        reset: Date.now() + 10_000,
        pending: Promise.resolve(),
      }),
    } as unknown as Ratelimit;
  }

  return new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(requests, seconds),
    analytics: true,
    prefix: "papermark",
  });
};
