import initialState from "../../store/swaps";

import createReducer from "./create";
import fetchReducer from "./fetch";

export default (state = initialState, action) => {
  const create = createReducer(state, action);
  const fetch = fetchReducer(state, action);

  return create || fetch || state;
};
