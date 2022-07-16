import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😔</span>
      <h1>Ничего не найдено!</h1>
      <p className={styles.description}>К сожалению, страница отсутствует.</p>
    </div>
  );
};

export default NotFoundBlock;
