export const GET_ILLUSTRATIONS = "GET_ILLUSTRATIONS";

export function getIllustrations() {
  return async function(dispatch) {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/illustrations`);
    const data = await res.json();

    let components = {};
    let illustrations = [];

    data.forEach(object => {
      object.components.forEach(item => {
        components[item.short_name] = item.image;
      });
    });
    Object.keys(components).forEach(key => {
      illustrations.push({
        short_name: key,
        image: components[key]
      });
    });
    return dispatch({
      type: GET_ILLUSTRATIONS,
      illustrations
    });
  };
}
