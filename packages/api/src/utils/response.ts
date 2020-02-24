const formatError = (
  message: string,
  errorContext = {}
): { message: string; errorContext: any } => ({
  message,
  errorContext
});

type ErrorParams = {
  errorMessage: string;
  errorContext?: any;
};
type ErrorResponse = (params: ErrorParams) => Response;
type SuccessResponse = (json?: any) => Response;

type SuccessStatusCode = 200;
type FailureStatusCode = 405 | 500 | 404;

const notAllowed: ErrorResponse = ({ errorMessage, errorContext = {} }) =>
  new Response(JSON.stringify(formatError(errorMessage, errorContext)), {
    status: 405,
    statusText: "NOT ALLOWED"
  });

const serverError: ErrorResponse = ({ errorMessage, errorContext = {} }) =>
  new Response(JSON.stringify(formatError(errorMessage, errorContext)), {
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

const notFound: ErrorResponse = ({ errorMessage, errorContext = {} }) =>
  new Response(JSON.stringify(formatError(errorMessage, errorContext)), {
    status: 404,
    statusText: "NOT FOUND"
  });

const successMap: { [key in SuccessStatusCode]: SuccessResponse } = {
  "200": success
};
const failureMap: { [key in FailureStatusCode]: ErrorResponse } = {
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
}: ErrorParams & { code: FailureStatusCode }) =>
  failureMap[code]({ errorMessage, errorContext });
