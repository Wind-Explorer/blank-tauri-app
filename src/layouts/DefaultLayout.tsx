import { Outlet } from "react-router-dom";
import WindowTitlebar from "../components/WindowTitlebar";

export default function DefaultLayout() {
  return (
    <div className="relative flex flex-col justify-between">
      <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
        <div className="z-50">
          <WindowTitlebar />
        </div>
        <div className="relative flex-grow h-full max-h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
