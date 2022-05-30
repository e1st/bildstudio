import axios from "axios";
import { ApiConfig } from "../config/ApiConfig";

export const getAboutUs = async () => {
  return axios.get(`${ApiConfig.apiServer}/about`);
};
