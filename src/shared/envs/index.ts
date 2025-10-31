import { logger } from "@/shared/utils/logger";
import { envsSchema } from "./schemas";
import type { Envs } from "./types";

export const envs = {
  environment: import.meta.env.MODE,
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    sampleRate: import.meta.env.VITE_SENTRY_SAMPLE_RATE,
    tracesSampleRate: import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE,
  },
} as Envs;

export function parseEnvs() {
  const { success, error } = envsSchema.safeParse(envs);

  if (!success) {
    logger.error({
      message: "Environment variables validation failed",
      context: {
        error,
      },
    });
  }

  if (!success && envs.environment === "production") {
    throw new Error("Invalid environment variables", { cause: error });
  }

  logger.debug({
    message: "Environment variables validation complete",
  });
}
