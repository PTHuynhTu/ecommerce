import {
  SHOW_LOADER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ACTIVE_ACCOUNT_SUCCESS,
  ACTIVE_ACCOUNT_FAILURE,
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

export const loginSuccess = (userRole) => ({
  type: LOGIN_SUCCESS,
  payload: userRole,
});

export const loginFailure = (errors) => ({
  type: LOGIN_FAILURE,
  payload: errors,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const activeSuccess = (message) => ({
  type: ACTIVE_ACCOUNT_SUCCESS,
  payload: message,
});

export const activeFailure = (errors) => ({
  type: ACTIVE_ACCOUNT_FAILURE,
  payload: errors,
});
