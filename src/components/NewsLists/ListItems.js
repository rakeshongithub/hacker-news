import React from "react";
import styles from "./NewsLists.module.scss";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const ListItems = (props) => {
  const { newsLists, isLoading } = props;
  return (
    <React.Fragment>
      {isLoading ? (
        <div className={styles.IsLoading}>loading...</div>
      ) : (
        newsLists.hits.map((item) => {
          if (item.title && item.url) {
            return (
              <div
                className={[styles.ListItems, "d-flex"].join(" ")}
                key={item.objectID}
              >
                <div className={[styles.LeftPanel, "d-flex"].join(" ")}>
                  <div className={styles.Comments}>
                    {item.num_comments || 0}
                  </div>
                  <div className={styles.UpVotesCount}>
                    {item.points || 0}{" "}
                    <span>
                      <ArrowDropUpIcon />
                    </span>
                  </div>
                  <div className={styles.NewsTitle}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
                <div className={[styles.RightPanel, "d-flex"].join(" ")}>
                  {item.url ? (
                    <div className={styles.LinkedDomain}>
                      (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url.split("/")[2]}
                      </a>
                      )
                    </div>
                  ) : null}
                  <div className={styles.AuthorName}>
                    by <span>{item.author}</span>
                  </div>
                  <div className={styles.TimeDiff}>5 hours ago</div>
                  <div className={styles.HideAction}>
                    [ <span>hide</span> ]
                  </div>
                </div>
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
