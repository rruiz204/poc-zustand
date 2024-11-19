import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useGlobalStore from "./useGlobalStore";

function Global() {
  const { setRandomText } = useGlobalStore();

  return (
    <div>
      <p>global works!</p>

      <div className="m-3">
        <input type="text" placeholder="type something..." onChange={(event) => setRandomText(event.target.value)}
          className="outline-none border-2 p-2 font-semibold rounded-md" />
      </div>

      <div className="m-3 flex gap-5">
        <Link className="underline" to={"/global/left"}>Left Side</Link>
        <Link className="underline" to={"/global/right"}>Right Side</Link>
      </div>

      <div className="m-3 p-2 border-2 rounded-md">
        <p className="font-semibold">Content</p>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Global;