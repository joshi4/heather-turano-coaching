import { HookApiRequest } from "@heather-turano-coaching/hooks";

const serverlessApiEndpoint = `https://api.livelifemindful.com`;

export type SubscribeToBlogRequest = {
  firstName: string;
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
  url: `${serverlessApiEndpoint}/blog/subscribe`,
  options: {
    method: "POST",
    data: body
  }
});
