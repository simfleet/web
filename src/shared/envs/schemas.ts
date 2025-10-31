import { z } from "zod";

const sentrySchema = z.object({
  dsn: z.url(),
  sampleRate: z.string(),
  tracesSampleRate: z.string(),
});
export const envsSchema = z.object({
  environment: z.union([
    z.literal("development"),
    z.literal("production"),
    z.literal("test"),
  ]),
  sentry: sentrySchema,
});
