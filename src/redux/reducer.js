import { GET_ILLUSTRATIONS, INCREASE_STAGE, RESET_STAGE } from "./actions";

const initialState = {
  illustrations: {},
  illustrationsLoaded: false,
  stage: 0
};

export default function(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case INCREASE_STAGE:
      return {
        ...state,
        stage: (state.stage += 1)
      };
    case RESET_STAGE:
      return {
        ...state,
        stage: 0
      };
    case GET_ILLUSTRATIONS:
      return {
        ...state,
        illustrations: data
      };
    default:
      return state;
  }
}
