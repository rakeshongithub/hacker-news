import React, { useState, useEffect } from "react";

import requestService from "./../../utils/requestService";
import styles from "./NewsLists.module.scss";
import ListItems from "./ListItems";

const NewsLists = props => {
  const [page, setPage] = useState(1);
  const [newsLists, setNewsLists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNewLists = async () => {
      setIsLoading(true);
      try {
        const response = await requestService.get(`/search?page=${page}`);
        if (
          response &&
          response.data &&
          response.data.hits &&
          response.data.hits.length
        ) {
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
      <div className={styles.LoadMore} onClick={() => loadMoreNews()}>
        More...
      </div>
    </div>
  );
};

export default NewsLists;
