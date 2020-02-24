import { Router, Route } from "./router";
import { RequestFailure } from "./response";

export class Api {
  routers: Router[];

  constructor() {
    this.routers = [];
  }

  register(router: Router) {
    this.routers.push(router);
  }

  route(request: Request) {
    const route = this.routers.reduce<Route | undefined>((accum, router) => {
      const route = router.resolve(request);
      if (route) {
        return route;
      }
      return undefined;
    }, undefined);

    if (route) {
      return route.handler(request);
    }

    return RequestFailure({
      code: 404,
      errorMessage: `The route "${request.url}" does not exist.`
    });
  }
}
