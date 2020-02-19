import { HookApiRequest } from "@heather-turano-coaching/hooks";

export type SubscribeToBlogRequest = {
  name: string;
  address: string;
};
export type SubscribeToBlogResponse = {
  member: {
    address: string;
    name: string;
    subscribed: boolean;
    vars?: {};
  };
  message: string;
};

export const subscribeToBlog: HookApiRequest<
  SubscribeToBlogRequest,
  SubscribeToBlogResponse
> = body => ({
  url: `${process.env.SERVERLESS_API}/blog/subscribe`,
  options: {
    method: "POST",
    data: body
  }
});
