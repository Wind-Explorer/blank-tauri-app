import { Outlet } from "react-router-dom";
import WindowTitlebar from "../components/WindowTitlebar";

export default function DefaultLayout() {
  return (
    <div className="relative flex flex-col justify-between">
      <div className="w-full h-max fixed inset-0 top-0 z-50">
        <WindowTitlebar />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>

      {/*
      A div that becomes black in dark mode to cover white color parts
      of the website when scrolling past the window's original view.
      */}
      <div className="fixed -z-50 dark:bg-black inset-0 w-full h-full"></div>
    </div>
  );
}
