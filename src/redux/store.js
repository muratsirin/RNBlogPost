import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication/authentication.slice";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore(
  {
    reducer: {
      authentication: authenticationReducer,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
