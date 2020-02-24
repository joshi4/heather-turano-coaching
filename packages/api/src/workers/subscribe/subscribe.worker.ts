import { RequestFailure, RequestSuccess } from "../../utils/response";
import { mailchimpUrl, mailchimpCredentials } from "../../configs";

export async function subscribeToBlog(req: Request): Promise<Response> {
  let requestBody;

  // validate if body can be parsed with json
  try {
    requestBody = await req.json();
  } catch (error) {
    return RequestFailure({
      code: 500,
      errorMessage: `Error trying to parse request body. Check to make sure that you are sending a proper request`,
      errorContext: error
    });
  }

  // add new user to the audience
  try {
    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${mailchimpCredentials}`
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
