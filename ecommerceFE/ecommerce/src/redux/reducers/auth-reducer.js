import { FORM_RESET } from "../action-types/admin-action-types";

import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SHOW_LOADER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../action-types/auth-action-types";

const initialState = {
  user: {},
  userEmail: "",
  userRole: "",
  isRegistered: false,
  loading: false,
  success: "",
  error: "",
  errors: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_RESET:
      return {
        ...state,
        errors: {},
        error: "",
        success: "",
        isRegistered: false,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true, loading: false, errors: {} };

    case REGISTER_FAILURE:
      return { ...state, errors: action.payload, loading: false };

    case SHOW_LOADER:
      return { ...state, loading: true, errors: {} };

    case LOGIN_SUCCESS:
      return { ...state, userRole: action.payload };

    case LOGIN_FAILURE:
      return { ...state, errors: action.payload };

    case LOGOUT_SUCCESS:
      return { ...state, userRole: "" };

    default:
      return state;
  }
};

export default authReducer;
