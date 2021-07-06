import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "../features/tweets/tweetsSlice";
export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
