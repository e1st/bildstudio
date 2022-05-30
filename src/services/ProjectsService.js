import axios from "axios";
import { ApiConfig } from "../config/ApiConfig";

export const getProjects = async () => {
  return axios.get(`${ApiConfig.apiServer}/projects`);
};
