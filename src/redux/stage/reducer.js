import { DECREASE_STAGE, INCREASE_STAGE, RESET_STAGE } from "./actions";

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
    default:
      return state;
  }
}
