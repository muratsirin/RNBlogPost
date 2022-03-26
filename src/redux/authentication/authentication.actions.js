import { signUpRequest } from "../../services/authentication/authentication.service";
import { loading, onError } from "./authentication.slice";

export const signUp = (user) => (dispatch) => {
  dispatch(loading(true));
  signUpRequest(user)
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(onError(error));
    });
};
