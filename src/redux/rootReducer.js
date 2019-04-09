import { combineReducers } from "redux";
import stage from "./stage/reducer";
import illustrations from "./illustrations/reducer";
import shirt from "./shirt/reducer";

const rootReducer = combineReducers({
  stage,
  illustrations,
  shirt
});

export default rootReducer;
