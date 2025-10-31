import * as Sentry from "@sentry/react";

import { envs } from "@/shared/envs";

export function initSentry() {
  if (envs.environment !== "production") return;

  Sentry.init({
    dsn: envs.sentry.dsn,
    environment: envs.environment,
    sendDefaultPii: true,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.consoleLoggingIntegration(),
    ],
    sampleRate: Number(envs.sentry.sampleRate),
    tracesSampleRate: Number(envs.sentry.tracesSampleRate),
    tracePropagationTargets: ["localhost"],
    enableLogs: true,
  });
}
