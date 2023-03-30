import * as types from "../../actions/types";

export default (state, { type, payload }) => {
  switch (type) {
    case types.LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case types.LOGOUT_USER_END:
      return {
        ...state,
        loading: false,
      };
    case types.LOGOUT_USER_SUCCESS:
      localStorage.clear();
      window.location.replace("/");
      return {
        ...state,
        profile: {},
        isAuth: false,
      };
    case types.LOGOUT_USER_FAILURE:
      localStorage.clear();
      window.location.replace("/");
      return {
        ...state,
        profile: {},
        isAuth: false,
      };
    default:
      return null;
  }
};
