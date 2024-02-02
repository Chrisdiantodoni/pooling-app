import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Maximize } from "@mynaui/icons-react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;

    // Add conditions based on your routes
    if (path === "/tenor") {
      return { title: "Tenor", group: "Master Data" };
    } else if (path === "/home/other") {
      return { title: "Tenor", group: "Master Data" };
    } else {
      return { title: "Beranda", group: "Master Data" };
    }
  };

  const { title, group } = getTitle();

  const [hideSidebar, setHideSidebar] = useState(true);

  return (
    <div className="flex h-screen">
      {hideSidebar && (
        <div className="bg-dark-blue">
          <Sidebar title={title} group={group} />
        </div>
      )}

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-stone-50">
        <div className="px-4 py-2">
          <header className="text-black text-2xl font-bold items-center flex my-3 justify-between">
            <div>
              Selamat Datang, User
              <span className="ml-5 py-3 px-5 bg-white rounded-xl shadow border border-gray-100 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-blue-600 text-sm font-semibold leading-[18px]">
                  {title}
                </div>
              </span>
            </div>
            <button
              onClick={() => setHideSidebar(!hideSidebar)}
              className="transition ease-in-out delay-150 text-stone-500 mx-3 p-2 rounded-lg hover:bg-gray-200 hover:translate-x-0 hover:scale-110 duration-300"
            >
              <Maximize />
            </button>
          </header>
          <hr></hr>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
