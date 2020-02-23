import * as ServerResponse from "../response";
// import { validateOriginRequest } from "../util";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const credentials = Buffer.from(
    `anystring:${process.env.MAILCHIMP_API_KEY}`
  ).toString("base64");

  let requestBody;

  console.log(req);

  // try {
  //   validateOriginRequest(req.url);
  // } catch (error) {
  //   return ServerResponse.notAllowed(
  //     `Requests from this origin "${req.url}" are not allowed.`
  //   );
  // }

  try {
    requestBody = await req.json();
  } catch (error) {
    return ServerResponse.error(
      `Error trying to parse request body. Check to make sure that you are sending a proper request`,
      error
    );
  }

  try {
    const url = `https://us4.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_SUBSCRIBE_AUDIENCE_ID}/members/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`
      },
      body: JSON.stringify({
        email_address: requestBody.address,
        email_type: "html",
        status: "subscribed",
        merge_fields: {
          FNAME: requestBody.firstName
        }
      })
    });

    const responseJson = await response.json();

    console.log(response.status);

    if (response.status === 200) {
      return ServerResponse.success(responseJson);
    }
    if (responseJson.title === "Member Exists") {
      return ServerResponse.error(
        `The email address "${requestBody.address}" is already subscribed.`
      );
    }
    return ServerResponse.error(responseJson.detail);
  } catch (error) {
    return ServerResponse.error(
      `There was an issue in adding the email address to the transactional system: ${error}`
    );
  }
}

export const subscribeToBlogPreflight = async (): Promise<Response> =>
  ServerResponse.preFlight();
