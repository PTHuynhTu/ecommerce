import {
  SHOW_LOADER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../action-types/auth-action-types";
export const showLoader = () => ({
  type: SHOW_LOADER,
});
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (errors) => ({
  type: REGISTER_FAILURE,
  payload: errors,
});
