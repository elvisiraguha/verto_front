import * as types from "../../actions/types";

export default (state, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case types.LOGIN_USER_END:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      return {
        ...state,
        isAuth: true,
        profile: payload.user,
        token: payload.token,
        message: payload.message,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: payload.message,
      };
    default:
      return null;
  }
};
