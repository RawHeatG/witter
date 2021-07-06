import { useTheme } from "./Contexts";
import { Home, Profile } from "./features";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  return (
    <div className="text-text bg-gray-900 w-screen h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
