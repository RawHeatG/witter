import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets } from "./tweetsSlice";
import { AddTweet } from "./AddTweet";
import { Tweet } from "./Tweet";

export function Feed() {
  const dispatch = useDispatch();
  const { tweets, status } = useSelector((state) => state.tweets);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch, tweets.length]);
  return (
    <div>
      <AddTweet />
      {(status === "fulfilled" || "loading") && (
        <section>
          {tweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </section>
      )}
    </div>
  );
}
