/* eslint-disable no-restricted-globals */

import { Router } from "./router";
import { subscribeToBlog } from "./workers/subscribeToBlog.worker";

import { isDev } from "./util";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const r = new Router();
  r.post("/blog/subscribe", subscribeToBlog);
  r.post("/blog/validate-email", subscribeToBlog);

  const response = (await r.route(request)) as Response;
  response.headers.append(
    "Access-Control-Allow-Origin",
    "https://blog.livelifemindful.com"
  );

  if (isDev) {
    response.headers.append(
      "Access-Control-Allow-Origin",
      "http://localhost:3000"
    );
  }

  return response;
}
