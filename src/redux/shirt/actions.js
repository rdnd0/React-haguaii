export const INCREASE_ELEMENTS = "INCREASE_ELEMENTS";
export const DECREASE_ELEMENTS = "DECREASE_ELEMENTS";
export const CHOOSE_SHIRTURL = "CHOOSE_SHIRTURL";
export const CHOOSE_SHIRTSIZE = "CHOOSE_SHIRTSIZE";
export const RESET_SHIRT = "RESET_SHIRT";

export function increaseElements() {
  return {
    type: INCREASE_ELEMENTS
  };
}

export function decreaseElements() {
  return {
    type: DECREASE_ELEMENTS
  };
}

export function chooseShirt(path1, path2) {
  return {
    type: CHOOSE_SHIRTURL,
    path1: path1,
    path2: path2
  };
}

export function chooseSize() {
  return {
    type: CHOOSE_SHIRTSIZE
  };
}

export function resetShirt() {
  return {
    type: RESET_SHIRT
  };
}
