import { addSubscriberToMailchimpAudience } from "./subscribe.service";
import { RequestFailure, RequestSuccess } from "../../utils/response";
import { parseRequestBody } from "../../utils/util";
import { SubscribeRequest } from "@heather-turano-coaching/domain";

export async function subscribeToBlog(request: Request): Promise<Response> {
  try {
    const requestBody = await parseRequestBody<SubscribeRequest>(request);
    const userResponse = await addSubscriberToMailchimpAudience(requestBody);

    // change to response
    return RequestSuccess(200, userResponse);
  } catch ({ code, message, context }) {
    return RequestFailure({
      code: code,
      errorMessage: message,
      errorContext: context
    });
  }
}

export const subscribeToBlogPreflight = async (): Promise<Response> =>
  RequestSuccess(200);
