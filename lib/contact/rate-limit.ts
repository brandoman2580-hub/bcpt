type Bucket = { count: number; resetAt: number };

export function createRateLimiter(options: { limit: number; windowMs: number; now?: () => number }) {
  const now = options.now ?? (() => Date.now());
  const buckets = new Map<string, Bucket>();

  return {
    allow(key: string): boolean {
      const time = now();

      if (buckets.size > 1000) {
        for (const [bucketKey, bucket] of buckets) {
          if (bucket.resetAt <= time) buckets.delete(bucketKey);
        }
      }

      const bucket = buckets.get(key);
      if (!bucket || bucket.resetAt <= time) {
        buckets.set(key, { count: 1, resetAt: time + options.windowMs });
        return true;
      }

      if (bucket.count >= options.limit) return false;
      bucket.count += 1;
      return true;
    },
  };
}

const TEN_MINUTES = 10 * 60 * 1000;

/** Stops a client from flooding validation. */
export const submissionLimiter = createRateLimiter({ limit: 20, windowMs: TEN_MINUTES });

/** Stops a client from sending more than a few real messages. */
export const deliveryLimiter = createRateLimiter({ limit: 5, windowMs: TEN_MINUTES });
