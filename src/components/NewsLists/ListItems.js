import React from "react";
import styles from "./NewsLists.module.scss";

const ListItems = props => {
  const { newsLists, isLoading } = props;
  return (
    <React.Fragment>
      {isLoading ? (
        <div className={styles.IsLoading}>loading...</div>
      ) : (
        newsLists.hits.map(item => {
          if (item.title && item.url) {
            return (
              <div
                className={[styles.ListItems, "d-flex"].join(" ")}
                key={item.objectID}
              >
                <div className={styles.Comments}>{item.num_comments || 0}</div>
                <div className={styles.UpVotesCount}>{item.points || 0}</div>
                <div className={styles.NewsTitle}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
                {item.url ? (
                  <div className={styles.LinkedDomain}>
                    (<a href={item.url}>{item.url.split("/")[2]}</a>)
                  </div>
                ) : null}
              </div>
            );
          }
          return null;
        })
      )}
    </React.Fragment>
  );
};

export default ListItems;
