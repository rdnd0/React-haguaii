export const GET_ILLUSTRATIONS = "GET_ILLUSTRATIONS";
export const INCREASE_STAGE = "INCREASE_STAGE";
export const RESET_STAGE = "RESET_STAGE";

//this function can now dispatch an action
export function getIllustrations() {
  return async function(dispatch) {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}illustrations`);
    const shirts = await res.json();
    //now we want to return de dispatch of a function
    return dispatch({
      type: GET_ILLUSTRATIONS,
      data: shirts
    });
  };
}

export function increaseStage() {
  return {
    type: INCREASE_STAGE
  };
}

export function resetStage() {
  return {
    type: RESET_STAGE
  };
}
