import requests from "@/script/request";

const baseUrl = "/test";

export default {
  testHttp: () => requests.post(`${baseUrl}/test`),
};
