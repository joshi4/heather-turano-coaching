import queryString from "query-string";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const headers = new Headers();

  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(
        process.env.MAILGUN_API_USERNAME +
          ":" +
          process.env.MAILGUN_API_PASSWORD
      ).toString("base64")
  );

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

  console.log(JSON.stringify(json));
  return new Response(JSON.stringify(json));
}
