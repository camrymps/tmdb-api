import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class Requestor {
    private _baseUrl: string;
    private _apiKey: string;
  
    constructor(baseUrl: string, apiKey: string) {
      this._baseUrl = baseUrl;
      this._apiKey = apiKey;
    }
  
    makeRequest<P, D>(
      method: string,
      path: string,
      params?: P
    ): Promise<AxiosResponse<D, D>> {
      const config: AxiosRequestConfig<P> = {
        method,
        baseURL: this._baseUrl,
        url: path,
        params: {
          api_key: this._apiKey,
          ...params
        }
      }
  
      return axios.request(config);
    }
  }