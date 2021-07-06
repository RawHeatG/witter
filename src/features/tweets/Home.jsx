import { LeftBar, RightBar } from "../../Components";
import { Feed } from "./Feed";

export function Home() {
  return (
    <div>
      <LeftBar />
      <div className="midbar">
        <Feed />
      </div>
      <RightBar />
    </div>
  );
}
