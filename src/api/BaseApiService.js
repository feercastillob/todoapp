import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_BASE_URL_PROD
    : process.env.VUE_APP_BASE_URL_DEV;

const axiosParams = {
  baseURL: `${baseURL}`,
  headers: {
    Authorization: "Bearer " + process.env.VUE_APP_BASIC_TOKEN,
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    put: (url, body, config) => axios.put(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export const axiosInstance = axios.create(axiosParams);
export default api(axiosInstance);
