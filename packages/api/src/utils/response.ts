import { ErrorResponse } from "@heather-turano-coaching/domain";

const formatError = (
  errorMessage: ErrorResponse["errorMessage"],
  errorContext = {}
): string =>
  JSON.stringify({
    errorMessage,
    errorContext
  });

type ErrorResponseFn = (params: ErrorResponse) => Response;
type SuccessResponseFn = (json?: any) => Response;

type SuccessStatusCode = 200;
type FailureStatusCode = 405 | 500 | 404;

const notAllowed: ErrorResponseFn = ({ errorMessage, errorContext = {} }) =>
  new Response(formatError(errorMessage, errorContext), {
    status: 405,
    statusText: "NOT ALLOWED"
  });

const serverError: ErrorResponseFn = ({ errorMessage, errorContext = {} }) =>
  new Response(formatError(errorMessage, errorContext), {
    status: 500,
    statusText: "SERVER ERROR"
  });

const success = (json?: any): Response => {
  if (json) {
    return new Response(JSON.stringify(json), {
      statusText: "OK"
    });
  }
  return new Response("", {
    statusText: "OK"
  });
};

const notFound: ErrorResponseFn = ({ errorMessage, errorContext = {} }) =>
  new Response(formatError(errorMessage, errorContext), {
    status: 404,
    statusText: "NOT FOUND"
  });

const successMap: { [key in SuccessStatusCode]: SuccessResponseFn } = {
  "200": success
};
const failureMap: { [key in FailureStatusCode]: ErrorResponseFn } = {
  "404": notFound,
  "500": serverError,
  "405": notAllowed
};

export const RequestSuccess = (code: SuccessStatusCode, json?: any) =>
  successMap[code](json);
export const RequestFailure = ({
  code,
  errorMessage,
  errorContext
}: ErrorResponse & { code: FailureStatusCode }) =>
  failureMap[code]({ errorMessage, errorContext });
