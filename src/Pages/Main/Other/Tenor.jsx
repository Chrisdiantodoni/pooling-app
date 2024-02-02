/* eslint-disable no-unused-vars */
import { ChevronDown } from "@mynaui/icons-react";
import React, { useState } from "react";

const Tenor = () => {
  const [openDropdownPageSize, setOpenDropdownPageSize] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const pageSizeOptions = [10, 25, 50];
  return (
    <div className="container">
      <div className="text-sm flex relative items-center mt-8">
        <span>Show</span>
        <div className="relative inline-block mx-2">
          <button
            onClick={() => setOpenDropdownPageSize(!openDropdownPageSize)}
            className="relative z-10 flex p-1 text-sm items-center text-gray-600 bg-white border border-collapse rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          >
            <span className="mx-1">{selectedPageSize}</span>
            <ChevronDown size={12} fill="#ffffff" />
          </button>
          {openDropdownPageSize && (
            <div className="transition ease-out duration-100 absolute z-20 origin-top-right overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              {pageSizeOptions.map((option) => (
                <p
                  className=" cursor-pointer px-3 py-1 menu-dropdown"
                  key={option}
                  onClick={() => {
                    setSelectedPageSize(option);
                    setOpenDropdownPageSize(false);
                  }}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
        Entries
      </div>
    </div>
  );
};

export default Tenor;
