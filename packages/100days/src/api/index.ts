import { HookApiRequest } from "@heather-turano-coaching/hooks";
import {
  SubscribeRequest,
  SubscribeResponse,
  subscribeEndpoint
} from "@heather-turano-coaching/domain";

export const subscribeToBlog: HookApiRequest<
  SubscribeRequest,
  SubscribeResponse
> = body => ({
  url: subscribeEndpoint,
  options: {
    method: "POST",
    data: body
  }
});
