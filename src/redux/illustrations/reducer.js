import { GET_ILLUSTRATIONS } from "./actions";

const initialState = {
  illustrations: {},
  illustrationsLoaded: false
};

export default function(state = initialState, action) {
  const { type, illustrations } = action;

  switch (type) {
    case GET_ILLUSTRATIONS:
      return {
        ...state,
        illustrations,
        illustrationsLoaded: true
      };
    default:
      return state;
  }
}
