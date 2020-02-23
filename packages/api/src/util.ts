export const isDev = process.env.NODE_ENV === "development";

// Allow everything and validate the origin at the request level
export const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Content-Type": "application/json",
  Connection: "keep-alive",
  "Access-Control-Allow-Headers": "Content-Type"
};

const allowedOrigins = ["blog.livelifemindful.com", "mindfulmovement100.com"];

export const validateOriginRequest = (origin: string) => {
  allowedOrigins.forEach(allowedOrigin => {
    if (!origin.includes(allowedOrigin)) {
      throw new Error("Sorry, charlie.");
    }
  });
};
