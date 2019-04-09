export const INCREASE_STAGE = "INCREASE_STAGE";
export const DECREASE_STAGE = "DECREASE_STAGE";
export const RESET_STAGE = "RESET_STAGE";
export const RANDOM_STAGE = "RANDOM_STAGE";

export function increaseStage() {
  return {
    type: INCREASE_STAGE
  };
}

export function decreaseStage() {
  return {
    type: DECREASE_STAGE
  };
}

export function resetStage() {
  return {
    type: RESET_STAGE
  };
}

export function randomStage() {
  return {
    type: RANDOM_STAGE
  };
}
