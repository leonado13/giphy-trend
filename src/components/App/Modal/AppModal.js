import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {hideModal} from "store/actions/modal";

import styles from './AppModal.module.scss';

const AppModal = ({visible, content, hideModal}) => {
  return visible ? (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={() => { hideModal() }}/>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  ) : null
};

export default connect(
  store => ({
    visible: store.modal.visible,
    content: store.modal.content,
  }),
  dispatch => bindActionCreators({
    hideModal,
  }, dispatch),
)(AppModal);
