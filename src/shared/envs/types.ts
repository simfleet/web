import type { z } from "zod";

import type { envsSchema } from "./schemas";

export type Envs = z.infer<typeof envsSchema>;
