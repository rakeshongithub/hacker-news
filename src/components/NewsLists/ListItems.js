import React from "react";
import styles from "./NewsLists.module.scss";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import LoadingComponent from "../UI/Loading";
import { dateDiff } from "./../../utils/utils";

const ListItems = (props) => {
  const { newsLists = [], isLoading, handleHideItem, handleUpvote } = props;
  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingComponent className={styles.IsLoading} />
      ) : (
        newsLists.map((item, index) => {
          return (
            <div
              className={[styles.ListItems, "d-flex"].join(" ")}
              key={item.objectID}
            >
              <div className={[styles.LeftPanel, "d-flex"].join(" ")}>
                <div className={styles.Comments}>{item.num_comments || 0}</div>
                <div className={styles.UpVotesCount}>
                  {item.points || 0}{" "}
                  <span onClick={() => handleUpvote(index)}>
                    <ArrowDropUpIcon />
                  </span>
                </div>
                <div className={styles.NewsTitle}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
              </div>
              <div className={[styles.RightPanel, "d-flex"].join(" ")}>
                {item.url ? (
                  <div className={styles.LinkedDomain}>
                    ({item.url.split("/")[2]})
                  </div>
                ) : null}
                <div className={styles.AuthorName}>
                  by <span>{item.author}</span>
                </div>
                <div className={styles.TimeDiff}>
                  {dateDiff(new Date(), item.created_at)}
                </div>
                <div className={styles.HideAction}>
                  [ <span onClick={() => handleHideItem(index)}>hide</span> ]
                </div>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default ListItems;
