export const envs = {
  environment: import.meta.env.MODE,
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    sampleRate: import.meta.env.VITE_SENTRY_SAMPLE_RATE,
    tracesSampleRate: import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE,
  },
} as const;
