import queryString from "query-string";
import * as ServerResponse from "../response";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const mgAuthCredentials = Buffer.from(
    process.env.MAILGUN_API_USERNAME + ":" + process.env.MAILGUN_API_PASSWORD
  ).toString("base64");

  let requestBody;

  try {
    requestBody = await req.json();
  } catch (error) {
    return ServerResponse.error(
      `Error trying to parse request body. Check to make sure that you are sending a proper request`
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
    return ServerResponse.success(json);
  } catch (error) {
    // change to error response
    return ServerResponse.error(
      `There was an issue in adding the email address to the transactional system: ${error}`
    );
  }
}

export const subscribeToBlogPreflight = async (): Promise<Response> =>
  ServerResponse.preFlight();
