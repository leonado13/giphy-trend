import {HIDE_MODAL, SHOW_MODAL} from "../reducers/modal";

export const showModal = (content) => ({
  type: SHOW_MODAL,
  data: {
    content,
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
