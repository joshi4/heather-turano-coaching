import queryString from "query-string";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const basicAuthCreds = Buffer.from(
    process.env.MAILGUN_API_USERNAME + ":" + process.env.MAILGUN_API_PASSWORD
  ).toString("base64");

  const headers = new Headers({
    Authorization: `Basic ${basicAuthCreds}`,
    "Content-Type": "application/json"
  });

  const mgUrl = queryString.stringifyUrl({
    url: `https://api.mailgun.net/v3/lists/${process.env.MAILGUN_MAILING_LIST}/members`,
    query: {
      address: "drewdecarme@gmail.com",
      upsert: "true"
    }
  });

  const res = await fetch(mgUrl, {
    method: "POST",
    headers
  });
  const json = await res.json();
  return new Response(JSON.stringify(json));
}
