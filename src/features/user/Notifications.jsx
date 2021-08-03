// import { useParams } from "react-router";
import { LeftBar, RightBar } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./userSlice";
import { useEffect } from "react";

export function Notifications() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    dispatch(getUserData(user.username));
  }, [dispatch, user.username]);
  return (
    <div>
      <LeftBar />
      <div className="midbar">
        {status === "loading" && <h2>loading....</h2>}
        {(status === "fulfilled" || status === "idle") && (
          <div className="flex flex-col ">
            <h1 className="text-3xl border-b border-gray-600 px-4 font-bold">
              Notifications
            </h1>

            {user?.notification.map((notif) => (
              <div key={notif} className="border-b border-gray-600 px-4 my-4">
                {notif}
              </div>
            ))}
          </div>
        )}
      </div>
      <RightBar />
    </div>
  );
}
