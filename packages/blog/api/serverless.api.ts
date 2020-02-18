import { HookApiRequest } from "@heather-turano-coaching/hooks";

export type SubscribeToBlogRequest = {
  firstName: string;
  emailAddress: string;
};
export type SubscribeToBlogResponse = {};

export const subscribeToBlog: HookApiRequest<SubscribeToBlogRequest> = body => ({
  url: `${process.env.SERVERLESS_API}/blog/subscribe`,
  options: {
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    method: "POST",
    body: JSON.stringify(body)
  }
});
