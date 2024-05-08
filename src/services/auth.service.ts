import axios from "axios";

import { UserLogin } from "../interfaces/backend/user";

const urlBase = process.env.REACT_APP_BACKEND_URL;

const headers = {
  "Content-Type": "application/json",
};

const postAuthWordpressLogin = (data: UserLogin) => {
  const url = `${urlBase}/users/login`;
  return axios.post(url, data, { headers });
};

export default {
  postAuthWordpressLogin,
};
