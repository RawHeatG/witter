import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets } from "./tweetsSlice";
import { AddTweet } from "./AddTweet";
import { Tweet } from "./Tweet";

export function Feed() {
  const dispatch = useDispatch();
  const { tweets, status, error } = useSelector((state) => state.tweets);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);
  console.log(tweets, status, error);
  return (
    <div>
      <AddTweet />
      {status === "loading" && <h1>Loding...</h1>}
      {status === "fulfilled" && (
        <section>
          {tweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </section>
      )}
    </div>
  );
}
