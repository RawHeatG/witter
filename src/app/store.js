import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "../features/tweets/tweetsSlice";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/authentication/authSlice";
export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
    auth: authReducer,
  },
});
