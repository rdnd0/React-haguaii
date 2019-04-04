export const GET_ILLUSTRATIONS = "GET_ILLUSTRATIONS";

export function getIllustrations() {
  return async function(dispatch) {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}illustrations`);
    const illustrations = await res.json();
    return dispatch({
      type: GET_ILLUSTRATIONS,
      data: illustrations
    });
  };
}
