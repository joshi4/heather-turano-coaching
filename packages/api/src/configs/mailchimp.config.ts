export const mailchimpCredentials = Buffer.from(
  `anystring:${process.env.MAILCHIMP_API_KEY}`
).toString("base64");

export const mailchimpUrl = `https://us4.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_SUBSCRIBE_AUDIENCE_ID}/members/`;
