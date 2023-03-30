import "dotenv/config";
import axios from "axios";

const { NODE_ENV, REACT_APP_SWAP_BACKEND } = process.env;

const backendUrl = REACT_APP_SWAP_BACKEND;

export default (data = {}) => {
  const { headers } = data;

  const baseURL = `${backendUrl}/api/v1`;

  return (NODE_ENV === "test" && axios) || axios.create({ baseURL, headers });
};
