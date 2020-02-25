import { ErrorResponse } from "@heather-turano-coaching/domain";
import {
  ServiceErrorStatusCodes,
  transposedServiceErrorCodes
} from "./ServiceError";

type SuccessStatusCode = 200;

export const RequestSuccess = (code: SuccessStatusCode, json?: any) => {
  if (json) {
    return new Response(JSON.stringify(json), {
      statusText: "OK"
    });
  }
  return new Response("", {
    statusText: "OK"
  });
};

export const RequestFailure = ({
  code,
  errorMessage,
  errorContext
}: ErrorResponse & { code: ServiceErrorStatusCodes }) => {
  console.log(code, errorMessage, errorContext);
  return new Response(JSON.stringify({ errorMessage, errorContext }), {
    status: code,
    statusText: transposedServiceErrorCodes[code]
  });
};
