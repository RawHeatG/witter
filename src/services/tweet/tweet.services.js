import axios from "axios";
import { API_URL } from "../../utils/constants";

export const getAllTweetsService = async () => await axios(`${API_URL}/tweet`);

export const toggleLike = async (userId, tweetId) =>
  await axios.post(`${API_URL}/like/${tweetId}/${userId}`);
