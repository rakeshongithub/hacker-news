import React, { useState, useEffect } from "react";

import requestService from "./../../utils/requestService";
import styles from "./NewsLists.module.scss";
import ListItems from "./ListItems";
import localStorageService from "../../services/localStorageService";
import REQ_URLS from "./../../enums/urls";

const NewsLists = () => {
  const [page, setPage] = useState(1);
  const [newsLists, setNewsLists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const extractCachedData = (reqUrl) => {
    const cacheData = localStorageService.getItem(reqUrl);
    const checkExpiry = (cacheData) =>
      new Date().getTime() - cacheData.expiry >
      localStorageService.expiry * 60 * 60 * 1000;
    if (cacheData && checkExpiry(cacheData)) {
      localStorageService.clear();
    }
    return cacheData;
  };

  const setDataToList = (response, reqUrl, setNewsLists, setIsLoading) => {
    if (
      response &&
      response.data &&
      response.data.hits &&
      response.data.hits.length
    ) {
      const filteredData = response.data.hits.filter(
        (item) => item.title && item.url
      );
      localStorageService.setItem(reqUrl, filteredData);
      console.info("Successfully load data for news");
      setNewsLists(filteredData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getNewLists = async () => {
      setIsLoading(true);
      try {
        const reqUrl = REQ_URLS.searchURLByPage(page);
        const cacheData = extractCachedData(reqUrl);
        if (cacheData) {
          console.info("Successfully load data for news from cache");
          setNewsLists(cacheData.value);
          setIsLoading(false);
          return;
        }
        const response = await requestService.get(reqUrl);
        setDataToList(response, reqUrl, setNewsLists, setIsLoading);
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

  const handleHideItem = (index) => {
    const reqUrl = REQ_URLS.searchURLByPage(page);
    console.log("=> Initiated hide item");
    const updatedData = [
      ...newsLists.slice(0, index),
      ...newsLists.slice(index + 1),
    ];
    setNewsLists(updatedData);
    localStorageService.setItem(reqUrl, updatedData);
  };

  const handleUpvote = (index) => {
    const reqUrl = REQ_URLS.searchURLByPage(page);
    console.log("=> Initiated upvote item");
    const updatedData = [
      ...newsLists.slice(0, index),
      {
        ...newsLists[index],
        points: newsLists[index].points + 1,
      },
      ...newsLists.slice(index + 1),
    ];
    setNewsLists(updatedData);
    localStorageService.setItem(reqUrl, updatedData);
  };

  return (
    <div className={styles.ListContainer}>
      <div className={styles.NewsItems}>
        <ListItems
          handleHideItem={handleHideItem}
          handleUpvote={handleUpvote}
          newsLists={newsLists}
          isLoading={isLoading}
        />
      </div>
      <div className={styles.LoadMore}>
        <span onClick={() => loadMoreNews()}>More...</span>
      </div>
    </div>
  );
};

export default NewsLists;
