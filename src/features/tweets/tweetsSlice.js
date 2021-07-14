import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllTweetsService,
  toggleLike,
  addTweetService,
} from "../../services/tweet/tweet.services";

// const initialState = {
//   tweets: [
//     {
//       name: "Jack Dorsey",
//       username: "jack",
//       content:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi corrupti magni consequuntur dolor reiciendis id illo quam officiis, nostrum, ab alias earum quisquam accusantium optio ipsam sit quibusdam in. Eum.",
//       likes: 0,
//     },
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
//   ],
//   status: "idle",
//   error: null,
// };

export const getAllTweets = createAsyncThunk(
  "tweets/getAllTweets",
  async () => {
    const response = await getAllTweetsService();
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

export const addTweet = createAsyncThunk(
  "tweets/addTweet",
  async ({ userId, content }) => {
    const response = await addTweetService(userId, content);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  }
);

export const likeButtonCliked = createAsyncThunk(
  "tweets/likeButtonCliked",
  async ({ userId, tweetId }) => {
    const response = await toggleLike(userId, tweetId);
    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    return { response: response.data.data, userId };
  }
);

const initialState = {
  tweets: [],
  status: "idle",
  error: null,
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTweets.pending]: (state) => {
      state.status = "loading";
    },
    [getAllTweets.fulfilled]: (state, action) => {
      state.tweets = action.payload;
      state.status = "fulfilled";
    },
    [getAllTweets.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [addTweet.pending]: (state) => {
      state.status = "loading";
    },
    [addTweet.fulfilled]: (state, action) => {
      state.tweets.push(action.payload);
      state.status = "fulfilled";
    },
    [addTweet.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [likeButtonCliked.pending]: (state) => {
      state.status = "loading";
    },
    [likeButtonCliked.fulfilled]: (state, action) => {
      const { response, userId } = action.payload;
      console.log(response._id);
      state.tweets.forEach((tweet) => {
        if (tweet._id === response._id) {
          const tweetIndex = tweet.likes.indexOf(userId);
          return tweetIndex > -1
            ? tweet.likes.splice(tweetIndex, 1)
            : tweet.likes.push(userId);
        } else return tweet;
      });
      state.status = "fulfilled";
    },
    [likeButtonCliked.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

// export const { like } = tweetsSlice.actions;

export default tweetsSlice.reducer;
