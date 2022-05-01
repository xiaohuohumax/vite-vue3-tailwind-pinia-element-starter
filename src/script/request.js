import axios from "axios";
import config from "@/config";

const requests = axios.create({
  ...config.axios,
});

const err = (error) => {
  return Promise.reject(error.message);
};

requests.interceptors.request.use((config) => {
  return config;
}, err);

requests.interceptors.response.use((response) => {
  const res = response.data;
  return res;
}, err);

export default requests;
