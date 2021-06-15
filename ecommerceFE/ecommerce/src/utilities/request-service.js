import axios from "axios";

import { API_BASE_URL } from "./constants/url";

class RequestService {
  get = (
    url,
    params,
    isAuthRequired = false,
    contentType = "application/json"
  ) => {
    return createRequest("GET", url, null, params, isAuthRequired, contentType);
  };

  post = (
    url,
    body,
    params,
    isAuthRequired = false,
    contentType = "application/json"
  ) => {
    return createRequest(
      "POST",
      url,
      body,
      params,
      isAuthRequired,
      contentType
    );
  };

  put = (
    url,
    body,
    params,
    isAuthRequired = false,
    contentType = "application/json"
  ) => {
    return createRequest("PUT", url, body, params, isAuthRequired, contentType);
  };

  delete = (
    url,
    params,
    isAuthRequired = false,
    contentType = "application/json"
  ) => {
    return createRequest(
      "DELETE",
      url,
      null,
      params,
      isAuthRequired,
      contentType
    );
  };
}

const createRequest = (
  method,
  url,
  body,
  params,
  isAuthRequired,
  contentType
) => {
  return axios({
    method: method,
    url: API_BASE_URL + url,
    data: body,
    params: params,
    headers: setHeader(isAuthRequired, contentType),
  });
};

const setHeader = (isAuthRequired, contentType) => {
  if (isAuthRequired) {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  axios.defaults.headers.common["Content-Type"] = contentType;
};

export default new RequestService();
