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
      <section>
        {(status === "fulfilled" || "loading") && (
          <div>
            {tweets.map((tweet) => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
