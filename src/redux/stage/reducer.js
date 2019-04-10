import {
  DECREASE_STAGE,
  INCREASE_STAGE,
  RESET_STAGE,
  RANDOM_STAGE
} from "./actions";

const initialState = {
  stage: 0
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case INCREASE_STAGE:
      return {
        ...state,
        stage: (state.stage += 1)
      };
    case DECREASE_STAGE:
      return {
        ...state,
        stage: (state.stage += 1)
      };
    case RESET_STAGE:
      return {
        ...state,
        stage: 0
      };
    case RANDOM_STAGE:
      return {
        ...state,
        stage: 2
      };
    default:
      return state;
  }
}
