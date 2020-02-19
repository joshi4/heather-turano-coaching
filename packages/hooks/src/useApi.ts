import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

export type ApiState<ResponseObj> =
  | {
      loading: boolean;
      data: null;
      error: null;
    }
  | {
      loading: false;
      data: null;
      error: AxiosError<ResponseObj>;
    }
  | {
      loading: false;
      data: ResponseObj;
      error: null;
    }
  | {
      loading: false;
      data: ResponseObj;
      error: true;
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

export type HookApiRequest<RequestBody, ResponseObj> = (
  body?: RequestBody
) => ApiConfig & {
  onSuccess?: (responseBody: ResponseObj) => void;
  onError?: (res: any) => void;
};

export function useApi<RequestBody, ResponseObj>(
  request: HookApiRequest<RequestBody, ResponseObj>
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
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          setApiResponse({
            loading: false,
            data: response.data,
            error: null
          });
        } else {
          setApiResponse({
            loading: false,
            data: response.data,
            error: true
          });
        }
      })
      .catch((error: AxiosError<ResponseObj>) => {
        setApiResponse({
          loading: false,
          data: null,
          error
        });
      });
  }, [apiRequest]);

  return [apiResponse, data => setApiRequest(request(data))];
}
