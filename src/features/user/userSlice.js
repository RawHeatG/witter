import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../services/user";
import { toggleFollow } from "../../services/user/user.services";

// const user = {
//   name: "Rohit Gulati",
//   username: "@rawheatg",
//   description: "Hi, I'm jack, jack of all things Web Dev👨‍💻",
//   followers: 624,
//   following: 268,
//   tweets: [
//     {
//       name: "Honey Singh",
//       username: "honeysingh",
//       content: "Yo yo",
//       likes: 0,
//     },
//     {
//       name: "Rohit Gulati",
//       username: "rawheat",
//       content: "Yolo beecheez",
//       likes: 0,
//     },
//     {
//       name: "Jack Dorsey",
//       username: "jack",
//       content: "Just setting up my",
//       likes: 0,
//     },
//     {
//       name: "Rohit Gulati",
//       username: "rawheat",
//       content: "Yolo beecheez",
//       likes: 0,
//     },
//   ],
// };

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (username) => {
    const response = await getUser(username);
    console.log(response);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

export const followButtonClicked = createAsyncThunk(
  "user/followButtonClicked",
  async ({ userToFollowId, userFollowingId }) => {
    console.log(userToFollowId, userFollowingId);
    const response = await toggleFollow(userToFollowId, userFollowingId);
    console.log(response);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

const initialState = {
  user: null,
  tweets: null,
  error: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.status = "loading";
    },
    [getUserData.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.tweets = action.payload.tweets;
      state.status = "fulfilled";
    },
    [getUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [followButtonClicked.pending]: (state) => {
      state.status = "loading";
    },
    [followButtonClicked.fulfilled]: (state, action) => {
      console.log("payload", action.payload);
      state.user = action.payload;
      state.status = "fulfilled";
    },
    [followButtonClicked.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export default userSlice.reducer;
