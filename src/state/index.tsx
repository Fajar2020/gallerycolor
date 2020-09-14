import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";

const RootReducer = combineReducers({
  colors: colorReducer,
});

export default RootReducer;
