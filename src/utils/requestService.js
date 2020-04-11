var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: "https://hn.algolia.com/api/v1",
  /* other custom settings */
});

module.exports = axiosInstance;
