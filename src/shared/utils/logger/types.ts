import type { z } from "zod";

import type { logEntrySchema, logSchema } from "./schemas.ts";

export type LogEntry = z.infer<typeof logEntrySchema>;

export type LogProps = z.infer<typeof logSchema>;
