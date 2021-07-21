import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likeButtonCliked } from "./tweetsSlice";

export function Tweet({ tweet }) {
  const tweetId = tweet._id;
  const { user, content, likes } = tweet;
  const loggedInUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-32 border-b border-gray-600 p-4">
      <Link to={`/user/${user.username}`}>
        <img
          className="rounded-full w-16 h-16"
          src={user.profileImgUrl}
          alt="user"
        />
      </Link>
      <div className="px-4 w-full">
        <Link to={`/user/${user.username}`}>
          <div className="pb-2">
            <h2 className="text-lg font-bold">
              {user.name}
              <span className="secondary-text"> @{user.username}</span>
            </h2>
          </div>
        </Link>
        <div className="pb-4 text-lg">{content}</div>
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <svg
              className="w-8 h-8 leftbar-option"
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
                  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                />
              </g>
            </svg>
            <svg
              className="w-8 h-8 leftbar-option"
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
                  d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                />
              </g>
            </svg>
            <svg
              className="w-8 h-8 leftbar-option"
              fill={
                likes?.includes(loggedInUser.userId)
                  ? "#e0245e"
                  : "currentColor"
              }
              stroke={
                likes?.includes(loggedInUser.userId)
                  ? "#e0245e"
                  : "currentColor"
              }
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                dispatch(
                  likeButtonCliked({
                    userId: loggedInUser.userId,
                    tweetId: tweetId,
                  })
                );
              }}
            >
              <g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.25}
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                />
              </g>
            </svg>
            {likes.length}
          </div>
          <div className="pr-4">
            <svg
              className="w-8 h-8 leftbar-option"
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
                  d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
