import axios from "axios";


const urlBase = "https://dev.edge-dob.com";

// const url = `https://dev.edge-dob.com/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`;
const headers = {
  "Content-Type": "application/json",
};
const postAuthWordpressLogin = (username: string, password: string) => {
  const url = `${urlBase}/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`;
  return axios.post(url, { headers });
}

export default {
  postAuthWordpressLogin,
};
