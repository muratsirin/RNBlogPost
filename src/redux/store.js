import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication/authentication.slice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
