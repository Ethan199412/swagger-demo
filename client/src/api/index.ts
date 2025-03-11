import { Api } from "./apiClient";

const api = new Api({
  baseUrl: "http://localhost:3000", // 替换实际接口地址
  baseApiParams: {
    headers: {
      "X-Client-Version": "1.0.0",
    },
  },
});

export const helloWorldApi = api.hello.appControllerGetHello;
