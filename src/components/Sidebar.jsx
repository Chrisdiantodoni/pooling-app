/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ImageLogo from "@/assets/Logo-Dashboard.png";
import {
  Home,
  ActivitySquare,
  FileText,
  Database,
  FileCheck,
  DotsCircle,
  Users,
  Bookmark,
} from "@mynaui/icons-react";
import { Link } from "react-router-dom";

const Sidebar = ({ title, group }) => {
  const MenuItems = [
    {
      title: "Beranda",
      Icon: <Home fill="#FFFFFF" color="#000B48" width={"25px"} />,
    },
    {
      title: "Dashboard",
      Icon: <ActivitySquare width={"25px"} />,
    },
    {
      title: "Pooling",
      Icon: <FileText fill="#FFFFFF" color="#000B48" width={"25px"} />,
    },
    {
      title: "Leasing",
      Icon: <FileCheck fill="#FFFFFF" color="#000B48" width={"25px"} />,
    },
    {
      title: "Other",
      Icon: <DotsCircle width={"25px"} />,
    },
    {
      title: "Master Data",
      Icon: <Database width={"25px"} />,
    },
    {
      title: "Laporan",
      Icon: <Bookmark width={"25px"} fill="#FFFFFF" />,
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState([]);

  const handleMenuItemClick = (item) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === item ? null : item));
  };

  const [userSetting, setUserSetting] = useState(false);

  const renderMenu = (item) => {
    if (activeDropdown === item.title) {
      switch (item.title) {
        case "Dashboard":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm ">MDS</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Area</p>
              </Link>
            </>
          );
        case "Pooling":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Kredit</p>
              </Link>

              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Leasing</p>
              </Link>
            </>
          );
        case "Leasing":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Staff Leasing</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Leasing Target</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Leasing Price List</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Leasing Surveyor</p>
              </Link>
            </>
          );
        case "Other":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">OTR Motor</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Promo Sales</p>
              </Link>
            </>
          );
        case "Master Data":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Staff</p>
              </Link>
              <Link
                to="/tenor"
                className={`sidebar-menu-item ${
                  title === "Tenor"
                    ? " bg-gray-200 border-gray-100 font-bold"
                    : ""
                }`}
              >
                <p className="my-2 pl-14 text-sm">Tenor</p>
              </Link>
            </>
          );
        case "Laporan":
          return (
            <>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Leasing</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Incoming</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Booking</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Cabang</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Detail Cabang</p>
              </Link>
              <Link to="/home" className="sidebar-menu-item">
                <p className="my-2 pl-14 text-sm">Detail Area</p>
              </Link>
            </>
          );
      }
    }
    return null;
  };

  return (
    <aside className="flex flex-col w-56 pt-7 bg-dark-blue dark:bg-gray-900">
      <div className="flex justify-center">
        <img src={ImageLogo} alt="Logo" width={"156px"} />
      </div>
      <div>
        <p className="ml-1 text-sm text-white font-semibold mt-5 mb-3  z-0">
          Main
        </p>

        {MenuItems.map((item, idx) => (
          <div key={idx}>
            <Link
              onClick={() => handleMenuItemClick(item.title)}
              className={`flex items-center px-4 py-2 transition-colors duration-300 transform font-poppins ${
                activeDropdown === item.title
                  ? "bg-white text-blue-600 font-semibold"
                  : "hover:bg-blue-950 dark:hover:text-gray-200 hover:text-white bg-dark-blue text-white"
              }`}
              to={`${item.title === "Beranda" ? "/" : "#"}`}
            >
              {activeDropdown === item.title ? (
                <div className="absolute left-0 w-1 h-8 flex-col justify-center items-center inline-flex">
                  <div className="w-1 h-8 bg-blue-600 rounded-tr-[100px] rounded-br-[100px]" />
                </div>
              ) : null}
              {item.Icon}
              <span className="mx-4 text-sm ">{item.title}</span>
              <span className="ml-auto">
                {item.title !== "Beranda" && activeDropdown === item.title ? (
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                ) : item.title !== "Beranda" ? (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                ) : null}
              </span>
            </Link>
            {activeDropdown === item.title && item.title !== "Beranda" ? (
              <div className="relative left-0 bg-white py-1 text-gray-700 transition-opacity duration-300 opacity-100  ">
                {renderMenu(item)}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="relative bottom-0">
        <div>
          <p className="ml-1 text-sm text-white font-semibold mt-5 mb-3">
            User Setting
          </p>
        </div>
        <a
          onClick={() => setUserSetting((prevSetting) => !prevSetting)}
          className={`flex items-center px-4 py-2 transition-colors duration-300 transform font-poppins ${
            userSetting
              ? "bg-white text-blue-600 font-semibold"
              : "hover:bg-blue-950 dark:hover:text-gray-200 hover:text-white bg-dark-blue text-white"
          }`}
          href="#"
        >
          {userSetting ? (
            <div className="absolute left-0 w-1 h-8 flex-col justify-center items-center inline-flex">
              <div className="w-1 h-8 bg-blue-600 rounded-tr-[100px] rounded-br-[100px]" />
            </div>
          ) : null}
          <Users width={"25px"} />
          <span className="mx-4 text-sm ">Profile</span>
          <span className="ml-auto">
            {userSetting ? (
              <svg
                className="w-4 h-4 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            )}
          </span>
        </a>
      </div>
      {userSetting ? (
        <div className="relative left-0 bg-white text-gray-700 transition-opacity duration-300 opacity-100 ">
          <Link to="/home" className="sidebar-menu-item">
            <p className="my-2 pl-14 text-sm">Lihat Profile</p>
          </Link>
          <Link to="/home" className="sidebar-menu-item">
            <p className="my-2 pl-14 text-sm">Ganti Password</p>
          </Link>
          <Link to="/home" className="sidebar-menu-item">
            <p className="my-2 pl-14 text-sm">Keluar</p>
          </Link>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
