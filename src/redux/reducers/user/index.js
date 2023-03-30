import initialState from "../../store/user";

import loginReducer from "./loginReducer";
import logoutReducer from "./logoutReducer";

export default (state = initialState, action) => {
  const login = loginReducer(state, action);
  const logout = logoutReducer(state, action);

  return login || logout || state;
};
