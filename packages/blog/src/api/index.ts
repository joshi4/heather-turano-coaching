import { HookApiRequest } from "@heather-turano-coaching/hooks";
import {
  SubscribeRequest,
  SubscribeResponse,
  makeEndpoint
} from "@heather-turano-coaching/domain";

export const subscribeToBlog: HookApiRequest<
  SubscribeRequest,
  SubscribeResponse
> = body => ({
  url: makeEndpoint("subscribe/blog"),
  options: {
    method: "POST",
    data: body
  }
});
