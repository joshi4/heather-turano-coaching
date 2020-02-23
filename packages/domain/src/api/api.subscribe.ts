export type SubscribeRequest = {
  firstName: string;
  address: string;
};
export type SubscribeResponse = {
  member: {
    address: string;
    name: string;
    subscribed: boolean;
    vars?: {};
  };
  message: string;
};
