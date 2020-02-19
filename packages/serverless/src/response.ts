import { responseHeaders } from "./util";

const formatError = (message: string): { message: string } => ({
  message
});

export const error = (errorMessage: string): Response =>
  new Response(JSON.stringify(formatError(errorMessage)), {
    status: 500,
    statusText: "SERVER ERROR"
  });

export const success = (json: any): Response =>
  new Response(JSON.stringify(json));

export const preFlight = (): Response => {
  const response = new Response();
  Object.entries(responseHeaders).forEach(([headerKey, headerValue]) =>
    response.headers.append(headerKey, headerValue)
  );
  return response;
};
