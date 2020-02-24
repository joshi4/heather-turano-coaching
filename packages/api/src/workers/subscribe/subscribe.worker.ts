import { RequestFailure, RequestSuccess } from "../../utils/response";
// import { validateOriginRequest } from "../util";

export async function subscribeToBlog(req: Request): Promise<Response> {
  const credentials = Buffer.from(
    `anystring:${process.env.MAILCHIMP_API_KEY}`
  ).toString("base64");

  let requestBody;

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
    return RequestFailure({
      code: 500,
      errorMessage: `Error trying to parse request body. Check to make sure that you are sending a proper request`,
      errorContext: error
    });
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

    if (response.status === 200) {
      return RequestSuccess(200, responseJson);
    }
    if (responseJson.title === "Member Exists") {
      return RequestFailure({
        code: 500,
        errorMessage: `The email address "${requestBody.address}" is already subscribed.`
      });
    }
    return RequestFailure({
      code: 500,
      errorMessage: responseJson.detail
    });
  } catch (error) {
    return RequestFailure({
      code: 500,
      errorMessage: `There was an issue in adding the email address to the transactional system: ${error}`,
      errorContext: error
    });
  }
}

export const subscribeToBlogPreflight = async (): Promise<Response> =>
  RequestSuccess(200);
