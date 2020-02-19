export const isDev = process.env.NODE_ENV === "development";

export const responseHeaders = {
  "Access-Control-Allow-Origin": "https://blog.livelifemindful.com",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Content-Type": "application/json",
  Connection: "keep-alive",
  "Access-Control-Allow-Headers": "Content-Type"
};
