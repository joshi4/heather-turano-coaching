export const isDev = process.env.NODE_ENV === "development";

// Allow everything and validate the origin at the request level
export const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Content-Type": "application/json",
  Connection: "keep-alive",
  "Access-Control-Allow-Headers": "Content-Type"
};

export const authorizeRequest = (token: string) => {
  if (token !== (process.env.HTC_AUTH_TOKEN as string)) {
    throw new Error("Sorry, charlie.");
  }
};
