import axios from "axios";
import { API_URL } from "../../utils/constants";

export const loginService = async (user) => {
  return axios.post(`${API_URL}/login`, user);
};

export const signupService = async (user) => {
  return axios.post(`${API_URL}/signup`, user);
};
