// import { useParams } from "react-router";
import { LeftBar, RightBar } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./userSlice";
import { useEffect } from "react";

export function Notifications() {
  // const { username } = useParams();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user);
  const { user, status } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(getUserData(loggedInUser.username));
  }, [dispatch, loggedInUser.username]);
  return (
    <div className="midbar">
      <LeftBar />
      <div>
        {status === "loading" && <h2>loading....</h2>}
        {status === "fulfilled" && (
          <div className="flex flex-col ">
            <h1 className="text-3xl border-b border-gray-600 px-4 font-bold">
              Notifications
            </h1>

            {user.notification.map((notif) => (
              <div className="border-b border-gray-600 px-4">{notif}</div>
            ))}
          </div>
        )}
      </div>
      <RightBar />
    </div>
  );
}
