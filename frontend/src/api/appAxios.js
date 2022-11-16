import axios from "axios";
import { getApiToken } from "../utils/utlis";

const appAxios = axios.create({
  baseURL: "/api",
  timeout: 2000,
  responseType: "json",
});

// if there is token stored in localstorage set headers and
//  send the token for authorization by intercepting the request to server
appAxios.interceptors.request.use(async (config) => {
  if (getApiToken()) {
    config.headers = {
      "Authorization": `Bearer ${getApiToken()}`
    }
  }
  return config;
});

export default appAxios;
