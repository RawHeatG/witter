import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsersData } from "../features/user/userSlice";

export function RightBar() {
  const dispatch = useDispatch();
  const { allUsers, status } = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.auth.user);
  const filteredUsers = allUsers?.filter(
    (user) => user._id !== loggedInUser.userId
  );
  useEffect(() => {
    dispatch(getAllUsersData());
  }, [dispatch]);
  return (
    <div className="fixed right-0 top-0 w-1/4 h-screen border-l-2 border-purple">
      <h2 className="text-3xl text-center font-bold p-6 border-b border-gray-600">
        Cool People to follow
      </h2>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "fulfilled" && (
        <div>
          {filteredUsers.map((user) => (
            <Link to={`/user/${user.username}`} key={user._id}>
              <div className="flex items-center p-4 border-b border-gray-600 space-x-4">
                <div>
                  <img
                    className="rounded-full w-16 h-16"
                    src={user.profileImgUrl}
                    alt={user.name}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold ">{user.name}</h2>
                  <h2 className="secondary-text">@{user.username}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
