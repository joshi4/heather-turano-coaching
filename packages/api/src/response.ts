const formatError = (
  message: string,
  errorContext = {}
): { message: string; errorContext: any } => ({
  message,
  errorContext
});

type ErrorResponse = (errorMessage: string, errorContext?: any) => Response;

export const notAllowed: ErrorResponse = (errorMessage, errorContext = {}) =>
  new Response(JSON.stringify(formatError(errorMessage, errorContext)), {
    status: 405,
    statusText: "NOT ALLOWED"
  });

export const error: ErrorResponse = (errorMessage, errorContext = {}) =>
  new Response(JSON.stringify(formatError(errorMessage, errorContext)), {
    status: 500,
    statusText: "SERVER ERROR"
  });

export const success = (json: any): Response =>
  new Response(JSON.stringify(json), {
    statusText: "OK"
  });

export const preFlight = (): Response =>
  new Response("", {
    statusText: "OK"
  });
