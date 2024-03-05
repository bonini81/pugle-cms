import axios from "axios";

import { UserLogin } from "../interfaces/backend/user";

const urlBase = "http://localhost:5000/api";

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
