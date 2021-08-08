import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LeftBar, RightBar } from "../../Components";
import { getAllUsersData } from "./userSlice";

export function Explore() {
  const dispatch = useDispatch();
  const { allUsers, status } = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.auth.user);
  // const [searchQuerry, setSearchQuerry] = useState("");
  const filteredUsers = allUsers.filter(
    (user) => user._id !== loggedInUser.userId
  );
  const [searchedUsers, setSearchedUsers] = useState(filteredUsers);
  console.log(searchedUsers);
  const debouncedUserFilter = (event) => {
    // eslint-disable-next-line no-use-before-define
    clearTimeout(timerId);
    console.log(event.target.value.length);
    var timerId = setTimeout(() => {
      console.log(event.target.value);
      if (event.target.value.length === 0)
        return setSearchedUsers(filteredUsers);
      setSearchedUsers(
        filteredUsers.filter(
          (user) =>
            user.username.slice(0, event.target.value.length) ===
            event.target.value
        )
      );
    }, 1000);
  };

  useEffect(() => {
    dispatch(getAllUsersData);
  }, [dispatch]);
  console.log(status);
  return (
    <div>
      <LeftBar />

      <div className="midbar">
        {status === "loading" && <h1>loading</h1>}
        {status === "fulfilled" && (
          <div className="flex flex-col">
            <div className="flex justify-center items-center w-full space-x-4 h-20 text-xl border-b border-gray-600 p-4 font-bold">
              <div>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    />
                  </g>
                </svg>
              </div>
              <input
                className="bg-gray-900 w-10/12 h-full px-2"
                onKeyDown={(event) => {
                  // setSearchQuerry(event.target.value);
                  debouncedUserFilter(event);
                }}
              ></input>
            </div>
            <div>
              {searchedUsers.length === 0 && (
                <div className="text-2xl flex justify-center pt-10">
                  <h1>No users found</h1>
                </div>
              )}
              {searchedUsers.length !== 0 &&
                searchedUsers.map((user) => (
                  <Link to={`/user/${user.username}`} key={user._id}>
                    <div className="flex items-center p-4 border-b border-gray-600 space-x-4">
                      <div>
                        <img
                          className="rounded-full w-16 h-16 object-cover"
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
          </div>
        )}
      </div>
      <RightBar />
    </div>
  );
}
