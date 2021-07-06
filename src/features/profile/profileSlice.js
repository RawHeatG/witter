import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    name: "Jack Dorsey",
    username: "jack",
    followers: 2,
    following: 2,
  },
  {
    name: "Honey Singh",
    username: "honeysingh",
    followers: 2,
    following: 2,
  },
  {
    name: "Rohit Gulati",
    username: "rawheat",
    followers: 2,
    following: 2,
  },
];

const initialState = {
  users: null,
};

export const profileSlice = createSlice({});
