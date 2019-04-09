import { GET_ILLUSTRATIONS } from "./actions";

const initialState = {
  illustrations: {},
  illustrationsLoaded: false
};

export default function(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_ILLUSTRATIONS:
      return {
        ...state,
        illustrations: data,
        illustrationsLoaded: true
      };
    default:
      return state;
  }
}
