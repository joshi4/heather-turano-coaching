import { isDev } from "./util";

const defaultHeaders = new Headers({
  "Access-Control-Allow-Origin": isDev
    ? "http://localhost:3000"
    : "https://blog.livelifemindful.com",
  "Content-Type": "application/json"
});

const formatError = (message: string): { message: string } => ({
  message
});

export const error = (errorMessage: string): Response =>
  new Response(JSON.stringify(formatError(errorMessage)), {
    status: 500,
    statusText: "SERVER ERROR",
    headers: defaultHeaders
  });

export const success = (json: any): Response =>
  new Response(JSON.stringify(json), {
    headers: defaultHeaders
  });
