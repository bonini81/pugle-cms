import axios from "axios";

// import { UserDelete } from "../interfaces/backend/user";

const urlBase = process.env.REACT_APP_BACKEND_URL;

const getUsersBackOffice = () => {
  const url = `${urlBase}/users`;
  return axios.get(url);
};

const deleteUserByKey = (key: string) => {
  const url = `${urlBase}/users/user-delete/${key}`;
  return axios.delete(url);
};

export default {
  getUsersBackOffice,
  deleteUserByKey,
};
