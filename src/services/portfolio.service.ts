import axios from "axios";

import { PortfolioItem } from "../interfaces/backend/portfolio";

const urlBase = "http://localhost:5000/api";

/* const headers = {
  "Content-Type": "multipart/form-data",
}; */

const postPortfolioContent = (data: PortfolioItem) => {
  const url = `${urlBase}/portfolioContent/new`;
  //  return axios.post(url, data, { headers });
  return axios.post(url, data);
};

export default {
  postPortfolioContent,
};
