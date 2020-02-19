import queryString from "query-string";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const mgAuthCredentials = Buffer.from(
    process.env.MAILGUN_API_USERNAME + ":" + process.env.MAILGUN_API_PASSWORD
  ).toString("base64");

  let requestBody;

  try {
    requestBody = await req.json();
  } catch (error) {
    return new Response(
      `Error trying to parse request body. Check to make sure that you are sending a proper request`,
      { status: 500, statusText: "SERVER ERROR" }
    );
  }

  try {
    const mgUrl = queryString.stringifyUrl({
      url: `https://api.mailgun.net/v3/lists/${process.env.MAILGUN_MAILING_LIST}/members`,
      query: {
        ...requestBody,
        upsert: "true"
      }
    });
    const res = await fetch(mgUrl, {
      method: "POST",
      headers: new Headers({
        Authorization: `Basic ${mgAuthCredentials}`
      }),
      body: requestBody
    });
    const json = await res.json();
    return new Response(JSON.stringify(json));
  } catch (error) {
    // change to error response
    return new Response(error);
  }
}
