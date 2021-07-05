import { useTheme } from "./Contexts";
import { Home } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  return (
    <div className="text-text bg-gray-800 w-screen h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
