import {
  INCREASE_ELEMENTS,
  DECREASE_ELEMENTS,
  CHOOSE_SHIRTURL,
  RESET_SHIRT
} from "./actions";

const initialState = {
  elements: 0,
  path1: "",
  path2: ""
};

export default function(state = initialState, action) {
  const { type, path1, path2 } = action;

  switch (type) {
    case INCREASE_ELEMENTS:
      return {
        ...state,
        elements: (state.elements += 1)
      };

    case DECREASE_ELEMENTS:
      return {
        ...state,
        elements: (state.elements -= 1)
      };

    case RESET_SHIRT:
      return {
        ...state,
        elements: 0
      };

    case CHOOSE_SHIRTURL:
      return {
        ...state
      };

    default:
      return state;
  }
}
