// import fetch from "unfetch";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

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

interface ApiConfig {
  url: string;
  options: Omit<AxiosRequestConfig, "url">;
}

export type HookApiRequest<RequestBody> = (
  body?: RequestBody
) => ApiConfig & {
  onSuccess?: (res: Response) => void;
  onError?: (res: any) => void;
};

export function useApi<RequestBody, ResponseObj>(
  request: HookApiRequest<RequestBody>
): [ApiState<ResponseObj>, (body?: RequestBody) => void] {
  const [apiResponse, setApiResponse] = useState<ApiState<ResponseObj>>(
    initialApiState
  );
  const [apiRequest, setApiRequest] = useState<ApiConfig>();

  useEffect(() => {
    if (!apiRequest) return;
    setApiResponse({
      loading: true,
      data: null,
      error: null
    });

    const { url, options } = apiRequest;

    axios
      .request<ResponseObj>({ url, ...options })
      .then(res => {
        console.log("--- JSON ---");
        console.log(res);
        console.log("--- END JSON ---");
        setApiResponse({
          loading: false,
          data: res.data,
          error: null
        });
      })
      .catch(error => {
        console.log("--- ERROR ---");
        console.log(error);
        console.log("--- END ERROR ---");
        setApiResponse({
          loading: false,
          data: null,
          error
        });
      });
  }, [apiRequest]);

  return [apiResponse, data => setApiRequest(request(data))];
}
