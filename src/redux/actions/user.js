import * as types from "./types";
import { apiAction } from "../helper/index";

export const login = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: "post",
      url: "auth/login",
      data: { ...data },
      onStart: types.LOGIN_USER_START,
      onEnd: types.LOGIN_USER_END,
      onSuccess: types.LOGIN_USER_SUCCESS,
      onFailure: types.LOGIN_USER_FAILURE,
    })
  );

export const logout = () => (dispatch) =>
  dispatch(
    apiAction({
      method: "post",
      url: "/auth/logout",
      onStart: types.LOGOUT_USER_START,
      onEnd: types.LOGOUT_USER_END,
      onSuccess: types.LOGOUT_USER_SUCCESS,
      onFailure: types.LOGOUT_USER_FAILURE,
      httpOptions: {
        headers: { authorization: `Bearer ${localStorage.token}` },
      },
    })
  );
