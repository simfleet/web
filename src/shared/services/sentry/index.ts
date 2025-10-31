import Sentry from "@sentry/react";

import { envs } from "@/shared/envs.ts";

export function initSentry() {
  if (envs.environment !== "production") return;

  Sentry.init({
    dsn: envs.sentry.dsn,
    environment: envs.environment,
    sendDefaultPii: true,
    integrations: [Sentry.browserTracingIntegration()],
    sampleRate: envs.sentry.sampleRate,
    tracesSampleRate: envs.sentry.tracesSampleRate,
    tracePropagationTargets: ["localhost"],
    enableLogs: true,
  });
}
