import React, {Component} from 'react';
import PropTypes from "prop-types";

import styles from './TrendingItem.module.scss';

class TrendingItem extends Component {
  render() {
    const {data} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.imgContainer}>
              <img src={data.images.fixed_width.url}
                   alt={data.title}
                   className={styles.img}
              />
            </div>
          </div>
        </div>
        { data.user ? (
          <div className={styles.authorContainer}>
            <a href={data.user.profile_url}
               className={styles.authorContent}>
              <img src={data.user.avatar_url}
                   className={styles.authorAvatar}
                   alt={data.user.display_name}/>
              <div className={styles.authorName}>
                {data.user.display_name}
              </div>
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

TrendingItem.propTypes = {
  data: PropTypes.object,
};
export default TrendingItem;
