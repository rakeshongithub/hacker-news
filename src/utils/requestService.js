import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "https://hn.algolia.com/api/v1",
  responseType: "json",
  /* other custom settings */
});

export default axiosInstance;
