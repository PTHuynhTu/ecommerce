import { reset } from "../actions/admin-actions";
import RequestService from "../../utilities/request-service";
import {
  showLoader,
  registerSuccess,
  registerFailure,
  loginFailure,
  loginSuccess,
  logoutSuccess,
  activeSuccess,
  activeFailure,
} from "../actions/auth-actions";

import { fetchUserSuccess } from "../actions/user-actions";
export const formReset = () => async (dispatch) => {
  dispatch(reset());
};

export const registration = (userRegistrationData) => async (dispatch) => {
  try {
    dispatch(showLoader());
    await RequestService.post("/auth/signup", userRegistrationData);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.response.data));
  }
};

export const login = (userData, history) => async (dispatch) => {
  try {
    const response = await RequestService.post("/auth/login", userData);
    localStorage.setItem("username", response.data.username);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userRole", response.data.authorities[0].authority);
    localStorage.setItem("isLoggedIn", "true");
    dispatch(loginSuccess(response.data.authorities[0].authority));
    dispatch(fetchUserSuccess(response.data));
    history.push("/");
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  localStorage.removeItem("isLoggedIn");
  dispatch(logoutSuccess());
};

export const activateAccount = (activateCode) => async (dispatch) => {
  try {
    const response = await RequestService.get("/auth/active-account", {
      code: activateCode,
    });
    dispatch(
      activeSuccess(
        "Active account has email: " + response.data.email + " successful!"
      )
    );
  } catch (error) {
    dispatch(activeFailure(error.response.data));
  }
};
