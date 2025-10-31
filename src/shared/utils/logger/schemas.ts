import { z } from "zod";

const logLevelSchema = z.union([
  z.literal("debug"),
  z.literal("info"),
  z.literal("warn"),
  z.literal("error"),
]);

export const logEntrySchema = z.object({
  level: logLevelSchema,
  message: z.string(),
  context: z.record(z.string(), z.unknown()).optional(),
});

export const logSchema = z.object({
  message: z.string(),
  context: z.record(z.string(), z.unknown()).optional(),
});
