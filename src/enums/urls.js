const REQ_URLS = {
  searchURLByPage: (page) => `/search?page=${page}`,
  searchURLByQuery: (page) => `/search?query=new&page=${page}`,
};

export default REQ_URLS;
