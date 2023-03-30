import initialState from "../../store/user";

import loginReducer from "./LoginReducer";
import logoutReducer from "./LogoutReducer";

export default (state = initialState, action) => {
  const login = loginReducer(state, action);
  const logout = logoutReducer(state, action);

  return login || logout || state;
};
