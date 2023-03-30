import initialState from "../../store/swaps";

import getStatus from "./getStatus";

export default (state = initialState, action) => {
  const status = getStatus(state, action);

  return status || state;
};
