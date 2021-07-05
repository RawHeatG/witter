import { AddWeet } from "./AddWeet";
import { Weet } from "../../../Components";
export function Feed() {
  return (
    <div className="px-1/4">
      <AddWeet />
      <Weet />
    </div>
  );
}
