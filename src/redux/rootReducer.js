import { combineReducers } from "redux";
import stage from "./stage/reducer";
import illustrations from "./illustrations/reducer";

const rootReducer = combineReducers({
  stage,
  illustrations
});

export default rootReducer;
