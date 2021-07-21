import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../services/user";
import { getAllUsers, toggleFollow } from "../../services/user/user.services";

export const getAllUsersData = createAsyncThunk(
  "user/getAllUsersData",
  async () => {
    const response = await getAllUsers();
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (username) => {
    const response = await getUser(username);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

export const followButtonClicked = createAsyncThunk(
  "user/followButtonClicked",
  async ({ userToFollowId, userFollowingId }) => {
    const response = await toggleFollow(userToFollowId, userFollowingId);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

const initialState = {
  allUsers: [],
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
    [getAllUsersData.pending]: (state) => {
      state.status = "loading";
    },
    [getAllUsersData.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      state.status = "fulfilled";
    },
    [getAllUsersData.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
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
