import { combineReducers } from "redux";
import { authenticationReducer } from "./authentication/authentication.slice";

export const reducer = combineReducers({
  authentication: authenticationReducer,
});
