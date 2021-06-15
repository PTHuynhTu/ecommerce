import { LOGOUT_SUCCESS } from "../../redux/action-types/auth-action-types";
import { FETCH_USER_SUCCESS } from "../action-types/user-action-types";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoaded: false,
  successMessage: "",
  userEditErrors: {},
  userResetPasswordErrors: {},
  reviewErrors: {},
  isReviewAdded: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...state, user: {}, isLoggedIn: false };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoaded: false,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
