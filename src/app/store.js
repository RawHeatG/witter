import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "../features/tweets/tweetsSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
  },
});
