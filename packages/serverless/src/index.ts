/* eslint-disable no-restricted-globals */

import { Router } from "./router";
import { subscribeToBlog } from "./workers/subscribeToBlog.worker";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  const r = new Router();
  r.post("/blog/subscribe", subscribeToBlog);
  r.post("/blog/validate-email", subscribeToBlog);
  //   r.get("/demos/router/foo", (req: Request) => fetch(req)); // return the response from the origin

  //   r.get("/", async () => new Response("Hello worker!")); // return a default message for the root route

  const resp = await r.route(request);
  console.log(resp);
  return new Response("testings!!");
}
