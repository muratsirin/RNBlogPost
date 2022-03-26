import {
  signUpRequest,
  signInRequest,
  signOutRequest,
} from "../../services/authentication/authentication.service";
import { loading, onError } from "./authentication.slice";

export const signUp = (user) => (dispatch) => {
  dispatch(loading(true));
  signUpRequest(user)
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error));
    });
};

export const signIn = (user) => (dispatch) => {
  dispatch(loading(true));
  signInRequest(user)
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error));
    });
};

export const signOut = () => (dispatch) => {
  dispatch(loading(true));
  signOutRequest()
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error));
    });
};
