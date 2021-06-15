import { FETCH_USER_SUCCESS } from "../action-types/user-action-types";
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
