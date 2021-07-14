import { useSelector } from "react-redux";
// import { likes } from "./tweetsSlice";
import { AddTweet } from "./AddTweet";
import { Tweet } from "./Tweet";

export function Feed() {
  const tweets = useSelector((state) => state.tweets.tweets);
  console.log(tweets);
  return (
    <div>
      <AddTweet />
      <section>
        {tweets.map((tweet) => (
          <Tweet key={tweet.username} tweet={tweet} />
        ))}
      </section>
    </div>
  );
}
