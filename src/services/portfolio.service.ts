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

const getPortfolioContent = () => {
  const url = `${urlBase}/portfolioContent`;
  return axios.get(url);
};

const getPortfolioContentByTitle = (title: string) => {
  const url = `${urlBase}/portfolioContent/item/${title}`;
  return axios.get(url);
};

const deletePortfolioContentByKey = (key: string) => {
  const url = `${urlBase}/portfolioContent/item-delete/${key}`;
  return axios.delete(url);
};

const patchPortfolioContentByKey = (key: string, data: PortfolioItem) => {
  const url = `${urlBase}/portfolioContent/item-update/${key}`;
  return axios.patch(url, data);
};

export default {
  postPortfolioContent,
  getPortfolioContent,
  getPortfolioContentByTitle,
  deletePortfolioContentByKey,
  patchPortfolioContentByKey,
};
