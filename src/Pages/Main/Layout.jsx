import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <div className="bg-dark-blue">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-stone-50">
        <div className="px-4 py-2">
          <header className="text-black text-2xl font-bold items-center flex my-3">
            Selamat Datang, User
            <span className="ml-5 py-3 px-5 bg-white rounded-xl shadow border border-gray-100 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-blue-600 text-sm font-semibold leading-[18px]">
                MDS
              </div>
            </span>
          </header>
          <hr></hr>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
