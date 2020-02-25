import { Mailchimp__Response__AddListMember } from "./api.mailchimp";

export type SubscribeRequest = {
  firstName: string;
  address: string;
};
export type SubscribeResponse = Mailchimp__Response__AddListMember;
