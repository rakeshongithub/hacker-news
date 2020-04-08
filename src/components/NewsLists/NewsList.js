import React, { useState, useEffect } from "react";

import requestService from "./../../utils/requestService";
import styles from "./NewsLists.module.scss";
import ListItems from "./ListItems";
import localStorageService from "../../services/localStorageService";

const NewsLists = (props) => {
  const [page, setPage] = useState(1);
  const [newsLists, setNewsLists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNewLists = async () => {
      setIsLoading(true);
      try {
        const reqUrl = `/search?page=${page}`;
        const cacheData = localStorageService.getItem(reqUrl);
        const checkExpiry = (cacheData) =>
          new Date().getTime() - cacheData.expiry >
          localStorageService.expiry * 60 * 60 * 1000;

        if (cacheData && checkExpiry(cacheData)) {
          localStorageService.clear();
        }
        if (cacheData) {
          console.info("Successfully load data for news from cache");
          setNewsLists(cacheData.value);
          setIsLoading(false);
          return;
        }
        const response = await requestService.get(reqUrl);
        if (
          response &&
          response.data &&
          response.data.hits &&
          response.data.hits.length
        ) {
          localStorageService.setItem(reqUrl, response.data);
          console.info("Successfully load data for news");
          setNewsLists(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(true);
        console.error("Failed to load data", err);
      }
    };

    getNewLists();
  }, [page]);

  const loadMoreNews = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.ListContainer}>
      <div className={styles.NewsItems}>
        <ListItems newsLists={newsLists} isLoading={isLoading} />
      </div>
      <div className={styles.LoadMore}>
        <span onClick={() => loadMoreNews()}>More...</span>
      </div>
    </div>
  );
};

export default NewsLists;
