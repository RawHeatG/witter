import { Home, User, Landing, Login, Signup, Notifications } from "./features";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-text bg-gray-900 w-screen h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
