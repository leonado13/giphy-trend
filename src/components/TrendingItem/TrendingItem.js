import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import TrendingItemModal from "components/TrendingItemModal/TrendingItemModal";
import {showModal} from "store/actions/modal";

import styles from './TrendingItem.module.scss';

class TrendingItem extends Component {
  showImageModal() {
    const {data, showModal} = this.props;
    showModal(
      <TrendingItemModal img={data.images.original.url}
                         title={data.title}
      />
    );
  }

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
                   onClick={this.showImageModal.bind(this)}
              />
            </div>
          </div>
        </div>
        {data.user ? (
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
export default connect(
  null,
  dispatch => bindActionCreators({
    showModal,
  }, dispatch),
)(TrendingItem);
