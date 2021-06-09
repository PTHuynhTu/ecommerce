import { reset } from "../actions/admin-actions";
import RequestService from "../../utilities/request-service";
import {
  showLoader,
  registerSuccess,
  registerFailure,
} from "../actions/auth-actions";

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
