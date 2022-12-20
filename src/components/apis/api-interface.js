import axios from "axios";
import { API_BASE_URL } from "../utils/baseurl";

export const postApiWithoutToken = (path, data) => {
  return axios.post(API_BASE_URL + path, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const putApiWithoutToken = (path, data) => {
  return axios.put(API_BASE_URL + path, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getApiWithoutToken = (path) => {
  return axios.get(API_BASE_URL + path, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
