import fetch from "unfetch";
import { useState, useEffect } from "react";

export type ApiState<ResponseObj> =
  | {
      loading: boolean;
      error: null;
      data: null;
    }
  | {
      loading: false;
      error: null;
      data: ResponseObj;
    }
  | {
      loading: false;
      error: Error;
      data: null;
    };

const initialApiState: ApiState<any> = {
  loading: false,
  data: null,
  error: null
};

type HookApiRequest<RequestBody> = (
  body?: RequestBody
) => { url: RequestInfo; options: RequestInit };

export function useApi<RequestBody, ResponseObj>(
  request: HookApiRequest<RequestBody>
): [ApiState<ResponseObj>, (body?: RequestBody) => void] {
  const [apiResponse, setApiResponse] = useState<ApiState<ResponseObj>>(
    initialApiState
  );
  const [apiRequest, setApiRequest] = useState<{
    url: RequestInfo;
    options: RequestInit;
  }>();

  useEffect(() => {
    if (!apiRequest) return;
    setApiResponse({
      loading: true,
      data: null,
      error: null
    });

    const { url, options } = apiRequest;

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setApiResponse({
          loading: false,
          data: json,
          error: null
        });
      })
      .catch(error => {
        setApiResponse({
          loading: false,
          data: null,
          error
        });
      });
  }, [apiRequest]);

  return [apiResponse, data => setApiRequest(request(data))];
}

export type SubscribeToBlogRequest = {
  firstName: string;
  emailAddress: string;
};
export type SubscribeToBlogResponse = {};

export const subscribeToBlog: HookApiRequest<SubscribeToBlogRequest> = body => ({
  url: `${process.env.SERVERLESS_API}/blog/subscribe`,
  options: {
    method: "POST",
    body: JSON.stringify(body)
  }
});
