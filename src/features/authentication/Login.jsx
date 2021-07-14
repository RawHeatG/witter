import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../authentication/authSlice";

export function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordStyle, setPasswordStyle] = useState({});

  const { user, status, error } = useSelector((state) => state.auth);
  console.log(user, status, error);
  const dispatch = useDispatch();

  function validatePassword(password) {
    const passwordRegex = /^[\w!@#$%^&*)(+=._-]{6,}$/;
    return passwordRegex.test(password);
  }
  const loggedInUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    loggedInUser && navigate("/feed");
  }, [loggedInUser, navigate]);

  useEffect(() => {
    if (password) {
      setPasswordStyle(
        validatePassword(password)
          ? { backgroundColor: "#8ac926", color: "white" }
          : { backgroundColor: "#ff595e", color: "white" }
      );
    } else {
      setPasswordStyle({});
    }
  }, [password]);

  const loginHandler = () => {
    dispatch(loginUser({ username, password }));
  };

  // const logoutHandler = () => {};

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <svg
        className="w-20 h-20"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            strokeWidth={0.5}
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          />
        </g>
      </svg>
      {/* <div class=" flex justify-center items-center">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div> */}
      <div className=" h-max w-max border-4 border-purple rounded-xl text-2xl">
        <div className="flex flex-col items-center p-6 space-y-4 ">
          <h1 className="text-2xl font-bold">Witter</h1>
          <input
            className="bg-gray-700 text-white p-4 rounded"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            style={passwordStyle}
            className="bg-gray-700 text-white p-4 rounded"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            onClick={loginHandler}
            className="px-4 py-2 bg-purple rounded-xl font-bold hover:bg-opacity-70"
          >
            Log In
          </button>
          <p>
            Don't have an accont?{" "}
            <Link to="/signup">
              <span className="text-purple cursor-pointer hover:underline">
                Sign-Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
