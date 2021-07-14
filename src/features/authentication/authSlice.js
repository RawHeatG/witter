import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../../services/authentication";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "authentication/loginUser",
  async (user) => {
    const response = await loginService(user);
    return { token: response.data.token, user: response.data.data };
  }
);

export const signupUser = createAsyncThunk(
  "authentication/signupUser",
  async (user) => {
    const response = await signupService(user);
    return { token: response.data.token, user: response.data.data };
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("witterUser")) || null,
  token: JSON.parse(localStorage.getItem("witterToken")) || null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("witterToken");
      localStorage.removeItem("witterUser");
      return {
        user: null,
        token: null,
        status: "idle",
        error: "null",
      };
    },
    resetAuthStateStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.status = "fulfilled";
      localStorage.setItem("witterToken", JSON.stringify(token));
      localStorage.setItem("witterUser", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = token;
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "error";
    },
    [signupUser.pending]: (state) => {
      state.status = "loading";
    },
    [signupUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.status = "fulfilled";
      localStorage.setItem("witterToken", JSON.stringify(token));
      localStorage.setItem("witterUser", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = token;
    },
    [signupUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "error";
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
