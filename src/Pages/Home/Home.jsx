import { LeftBar, RightBar } from "../../Components";
import { Feed } from "./Components";

export function Home() {
  return (
    <div>
      <LeftBar />
      <div className="feed ml-1/2">
        <Feed />
      </div>
      <RightBar />
    </div>
  );
}
