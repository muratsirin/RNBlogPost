import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication/authentication.slice";
import { postReducer } from "./post/post.slice";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore(
  {
    reducer: {
      authentication: authenticationReducer,
      post: postReducer,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
