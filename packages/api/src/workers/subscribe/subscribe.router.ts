import { Router } from "../../utils/router";

import { subscribeToBlogPreflight, subscribeToBlog } from "./subscribe.worker";

export const subscribeRouter = new Router();
subscribeRouter.options("/subscribe", subscribeToBlogPreflight);
subscribeRouter.post("/subscribe", subscribeToBlog);
