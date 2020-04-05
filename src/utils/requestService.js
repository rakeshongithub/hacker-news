var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: "http://hn.algolia.com/api/v1"
  /* other custom settings */
});

module.exports = axiosInstance;
