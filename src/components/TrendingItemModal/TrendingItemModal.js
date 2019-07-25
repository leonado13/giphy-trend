import React from 'react';

import styles from './TrendingItemModal.module.scss';

const TrendingItemModal = ({img, title}) => (
  <div className={styles.container}>
    <img className={styles.img}
         src={img}
         alt={title}/>
  </div>
);

export default TrendingItemModal;
