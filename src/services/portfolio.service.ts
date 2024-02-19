import axios from "axios";

import { PortfolioItem } from "../interfaces/backend/portfolio";

const urlBase = "http://localhost:5000/api";

const headers = {
  "Content-Type": "application/json",
};

const postPortfolioContent = (data: PortfolioItem ) => {
  const url = `${urlBase}/portfolioContent/new`;
  return axios.post(url, data, { headers });
};

export default {
  postPortfolioContent,
};
