export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
  visible: false,
  content: null,
};

export default function (state = initialState, {type, data}) {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
        content: data.content,
      };
    case HIDE_MODAL:
      return {
        ...state,
        visible: false,
        content: null,
      };
    default:
      return {
        ...state
      };
  }
}
