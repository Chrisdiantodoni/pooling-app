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
import { Link, Navigate } from "react-router-dom";

const Sidebar = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [userSetting, setUserSetting] = useState(false);

  const renderMenu = (item) => {
    switch (item.title) {
      case "Dashboard":
        return (
          <div className="h-auto">
            <Link to="/home">
              <p className="my-5">MDS</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Area</p>
            </Link>
          </div>
        );
      case "Pooling":
        return (
          <div className="h-auto">
            <Link to="/home">
              <p className="my-5">Kredit</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Leasing</p>
            </Link>
          </div>
        );
      case "Leasing":
        return (
          <>
            <Link to="/home">
              <p className="my-5">Staff Leasing</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Leasing Target</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Leasing Price List</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Leasing Surveyor</p>
            </Link>
          </>
        );
      case "Other":
        return (
          <>
            <Link to="/home">
              <p className="my-5">OTR Motor</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Promo Sales</p>
            </Link>
          </>
        );
      case "Master Data":
        return (
          <>
            <Link to="/home">
              <p className="my-5">Staff</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Tenor</p>
            </Link>
          </>
        );
      case "Laporan":
        return (
          <div className="h-auto">
            <Link to="/home">
              <p className="my-5">Leasing</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Incoming</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Booking</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Cabang</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Detail Cabang</p>
            </Link>
            <Link to="/home">
              <p className="my-5">Detail Area</p>
            </Link>
          </div>
        );
    }
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
            <a
              onClick={() => handleMenuItemClick(idx)}
              className={`flex items-center px-4 py-2 transition-colors duration-300 transform font-poppins ${
                activeIndex == idx
                  ? "bg-white text-blue-600 font-semibold"
                  : "hover:bg-gray-700 dark:hover:text-gray-200 hover:text-white bg-dark-blue text-white"
              }`}
              href="#"
            >
              {activeIndex == idx ? (
                <div className="absolute left-0 w-1 h-8 flex-col justify-center items-center inline-flex">
                  <div className="w-1 h-8 bg-blue-600 rounded-tr-[100px] rounded-br-[100px]" />
                </div>
              ) : null}
              {item.Icon}
              <span className="mx-4 text-sm ">{item.title}</span>
              <span className="ml-auto">
                {activeIndex === idx && item.title !== "Beranda" ? (
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
            </a>
            {activeIndex === idx && item.title !== "Beranda" && (
              <div className="relative left-0 bg-white text-gray-700 p-2 transition-opacity duration-300 opacity-100 px-8">
                {renderMenu(item)}
              </div>
            )}
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
              : "hover:bg-gray-700 dark:hover:text-gray-200 hover:text-white bg-dark-blue text-white"
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
        <div className="relative left-0 bg-white text-gray-700 p-2 transition-opacity duration-300 opacity-100 px-8">
          <Link to="/home">
            <p className="my-5">Lihat Profile</p>
          </Link>
          <Link to="/home">
            <p className="my-5">Ganti Password</p>
          </Link>
          <Link to="/home">
            <p className="my-5">Keluar</p>
          </Link>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
