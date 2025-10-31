import * as Sentry from "@sentry/react";
import type { LogEntry, LogProps } from "@/shared/utils/logger/types.ts";

const isDev = import.meta.env.DEV;

function log(entry: LogEntry) {
  if (isDev) {
    console[entry.level](`[${entry.level.toUpperCase()}] ${entry.message}`, {
      ...entry.context,
    });

    return;
  }

  Sentry.logger[entry.level](
    `[${entry.level.toUpperCase()}] ${entry.message}`,
    entry.context,
  );
}

export const logger = {
  debug: ({ message, context }: LogProps) =>
    log({ level: "debug", message: message, context: context }),
  info: ({ message, context }: LogProps) =>
    log({ level: "info", message: message, context: context }),
  warn: ({ message, context }: LogProps) =>
    log({ level: "warn", message: message, context: context }),
  error: ({ message, context }: LogProps) =>
    log({ level: "error", message: message, context: context }),
};
