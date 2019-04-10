import {
  INCREASE_ELEMENTS,
  DECREASE_ELEMENTS,
  CHOOSE_SHIRTURL,
  RESET_SHIRT,
  CHOOSE_SHIRTSIZE
} from "./actions";

const initialState = {
  elements: 0,
  path1: "",
  path2: "",
  size: ""
};

export default function(state = initialState, action) {
  const { type, path1, path2, size } = action;

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
        ...state,
        path1,
        path2
      };

    case CHOOSE_SHIRTSIZE:
      return {
        ...state,
        size
      };

    default:
      return state;
  }
}
