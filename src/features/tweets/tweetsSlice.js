import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweets: [
    {
      name: "Jack Dorsey",
      username: "jack",
      content: "Just setting up my",
      likes: 0,
    },
    {
      name: "Honey Singh",
      username: "honeysingh",
      content: "Yo yo",
      likes: 0,
    },
    {
      name: "Rohit Gulati",
      username: "rawheat",
      content: "Yolo beecheez",
      likes: 0,
    },
  ],
  // tweets: {
  //   name: "jack Dorsey",
  //   username: "jack",
  //   content: "Just setting up my Witter 🐦",
  //   likes: 0,
  // },
  status: "idle",
  error: null,
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    // addTweet: (state, action) => {
    //   state.tweets.
    // },
    like: (state, action) => {
      state.tweets.map((tweet) =>
        tweet.username === action.payload.username ? tweet.likes++ : tweet
      );
    },
  },
});

export const { like } = tweetsSlice.actions;

export default tweetsSlice.reducer;
