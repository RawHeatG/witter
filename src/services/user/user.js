import { API_URL } from "../../utils/contants";
import axios from "axios";
export const getUser = async (username) =>
  await axios(`${API_URL}/user/${username}`);
