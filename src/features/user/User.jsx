import { useParams } from "react-router";
import { LeftBar, RightBar } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { followButtonClicked, getUserData } from "./userSlice";
import { Tweet } from "../tweets/Tweet";
import { useEffect } from "react";
import { logoutUser } from "../authentication/authSlice";
import { useNavigate } from "react-router-dom";

export function User() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { user, status, tweets } = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserData(username));
  }, [dispatch, username]);

  console.log(loggedInUser);

  return (
    <div>
      <LeftBar />
      {status === "loading" && <div>Loading...</div>}
      {status === "fulfilled" && user && (
        <div className="midbar">
          <section className="px-6 pt-20 pb-6 text-xl border-b border-gray-600">
            <img
              className="rounded-full w-36 h-36 object-cover"
              src={user.profileImgUrl}
              alt={user.name}
            />
            <div className="flex justify-between py-4">
              <div>
                <div className="py-4">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <h3 className="secondary-text">@{user.username}</h3>
                </div>

                <h3 className="pb-4">{user.bio}</h3>
                <div className="flex space-x-2 items-center secondary-text pb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.25}
                        d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
                      />
                      <circle cx="7.032" cy="8.75" r="1.285" />
                      <circle cx="7.032" cy="13.156" r="1.285" />
                      <circle cx="16.968" cy="8.75" r="1.285" />
                      <circle cx="16.968" cy="13.156" r="1.285" />
                      <circle cx="12" cy="8.75" r="1.285" />
                      <circle cx="12" cy="13.156" r="1.285" />
                      <circle cx="7.032" cy="17.486" r="1.285" />
                      <circle cx="12" cy="17.486" r="1.285" />
                    </g>
                  </svg>
                  <h3>Joined November 2013</h3>
                </div>
                <div className="flex space-x-4">
                  <h3 className="secondary-text">
                    <span className="text-text font-bold">
                      {user.following.length}
                    </span>{" "}
                    Following
                  </h3>
                  <h3 className="secondary-text">
                    <span className="text-text font-bold">
                      {user.followers.length}
                    </span>{" "}
                    Followers
                  </h3>
                </div>
              </div>
              {username === loggedInUser.username ? (
                <div>
                  <button
                    onClick={() => {
                      dispatch(logoutUser());
                      navigate("/");
                    }}
                    className="text-purple hover:text-text font-semibold border border-purple rounded-full py-3 px-4"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() =>
                      dispatch(
                        followButtonClicked({
                          userToFollowId: user._id,
                          userFollowingId: loggedInUser.userId,
                        })
                      )
                    }
                    className=" hover:bg-opacity-70 font-semibold bg-purple rounded-full py-3 px-8"
                  >
                    {user.followers.includes(loggedInUser.userId)
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                </div>
              )}
            </div>
          </section>
          <section>
            {tweets.length ? (
              tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
            ) : (
              <div className="flex justify-center p-4">
                <h2 className="text-2xl">No tweets, Yet🐦</h2>
              </div>
            )}
          </section>
        </div>
      )}
      <RightBar />
    </div>
  );
}
