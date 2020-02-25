import {
  SubscribeRequest,
  Mailchimp__Request__AddListMember,
  Mailchimp__Response__AddListMember,
  MailchimpResponse__Error
} from "@heather-turano-coaching/domain";
import { mailchimpUrl, mailchimpHeaders } from "../../configs";
import { ServiceError } from "../../utils/ServiceError";

export const isMailchimpError = <ResponseType>(
  pet: MailchimpResponse__Error | ResponseType
): pet is MailchimpResponse__Error => {
  return (pet as MailchimpResponse__Error).detail !== undefined;
};

export const addSubscriberToMailchimpAudience = async (
  requestBody: SubscribeRequest
): Promise<Mailchimp__Response__AddListMember> => {
  try {
    const mailchimpAddListMemberBody: Mailchimp__Request__AddListMember = {
      email_address: requestBody.address,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: requestBody.firstName
      }
    };

    const user = await fetch(mailchimpUrl, {
      method: "POST",
      headers: mailchimpHeaders,
      body: JSON.stringify(mailchimpAddListMemberBody)
    });
    const userJson = await user.json();

    if (isMailchimpError(userJson)) {
      if (userJson.status === 400) {
        throw new ServiceError(
          "SERVER ERROR",
          `The email address "${requestBody.address}" is already subscribed.`,
          userJson
        );
      }

      if (userJson.status !== 200) {
        throw new ServiceError("SERVER ERROR", userJson.detail, userJson);
      }
    }

    return userJson;
  } catch ({ code, message, context }) {
    throw new ServiceError("SERVER ERROR", message, context);
  }
};
