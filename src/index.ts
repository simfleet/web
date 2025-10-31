import { parseEnvs } from "@/shared/envs";
import { initSentry } from "@/shared/services/sentry";

initSentry();

parseEnvs();

import "./bootstrap";
