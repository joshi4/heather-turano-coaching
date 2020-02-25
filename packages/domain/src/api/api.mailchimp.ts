export type MailchimpResponse__Error = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

export type MailchimpListMember__Status =
  | "subscribed"
  | "unsubscribed"
  | "cleaned"
  | "pending"
  | "transactional"
  | "archived";

export type MailchimpListMember__MergeFields = { [key: string]: string };
export type MailchimpListMember__Interests = { [key: string]: string };

export type MailchimpListMember__StatsECommerceData = {
  total_revenue: number;
  number_of_orders: number;
  currency_code: string;
};

export type MailchimpListMember__Stats = {
  avg_open_rate: number;
  avg_click_rate: number;
  ecommerce_data: MailchimpListMember__StatsECommerceData;
};

export type MailchimpListMember__Location = {
  latitude: number;
  longitude: number;
  gmtoff: number;
  dstoff: number;
  country_code: number;
  timezone: string;
};

export type MailchimpListMember__MarketingPermissions = {
  marketing_permission_id: string;
  text: string;
  enabled: boolean;
};

export type MailchimpListMember__LastNote = {
  note_id: number;
  created_at: string;
  created_by: string;
  note: string;
};

export type MailchimpListMember__Tags = {
  id: number;
  name: string;
};

export type MailchimpListMember__Links = {
  rel: string;
  href: string;
  method: string;
  targetSchema: string;
  schema: string;
};

export interface MailchimpListMember {
  id: string;
  email_address: string;
  unique_email_id: string;
  web_id: string;
  email_type: string;
  status: MailchimpListMember__Status;
  unsubscribe_reason: string;
  merge_fields: MailchimpListMember__MergeFields;
  interests: MailchimpListMember__Interests;
  stats: MailchimpListMember__Stats;
  ip_signup: string;
  timestamp_signup: string;
  ip_opt: string;
  timestamp_opt: string;
  member_rating: number;
  last_changed: string;
  language: string;
  vip: boolean;
  email_client: string;
  location: MailchimpListMember__Location;
  marketing_permissions: MailchimpListMember__MarketingPermissions[];
  last_note: MailchimpListMember__LastNote;
  source: string;
  tags_count: number;
  tags: MailchimpListMember__Tags[];
  list_id: string;
  _links: MailchimpListMember__Links[];
}

// Requests
export type Mailchimp__Request__AddListMember = {
  email_address: string;
  email_type?: string;
  status: Exclude<MailchimpListMember__Status, "archived">;
  merge_fields?: MailchimpListMember__MergeFields;
  interests?: MailchimpListMember__Interests;
  language?: string;
  vip?: boolean;
  location?: MailchimpListMember__Location;
  marketing_permissions?: MailchimpListMember__MarketingPermissions[];
  id_signup?: string;
  timestamp_signup?: string;
  ip_opt?: string;
  timestamp_opt?: string;
  tags?: MailchimpListMember__Tags[];
};
export type Mailchimp__Response__AddListMember = MailchimpListMember;
