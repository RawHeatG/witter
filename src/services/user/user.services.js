import { API_URL } from "../../utils/constants";
import axios from "axios";

export const getAllUsers = async () => await axios(`${API_URL}/user`);

export const getUser = async (username) =>
  await axios(`${API_URL}/user/${username}`);

export const toggleFollow = async (userToFollowId, userFollowingId) =>
  await axios.post(`${API_URL}/follow/${userToFollowId}/${userFollowingId}`);
