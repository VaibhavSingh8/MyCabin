import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { useState } from "react";

const MainNav = ({ collapse }) => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const navItems = [
    {
      name: "Home",
      icon: (
        <HiOutlineHome className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      ),
      route: "/dashboard",
    },
    {
      name: "Bookings",
      icon: (
        <HiOutlineCalendarDays className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      ),
      route: "/bookings",
    },
    {
      name: "Cabins",
      icon: (
        <HiOutlineHomeModern className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      ),
      route: "/cabins",
    },
    {
      name: "Users",
      icon: (
        <HiOutlineUsers className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      ),
      route: "/account",
    },
    {
      name: "Settings",
      icon: (
        <HiOutlineCog6Tooth className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      ),
      route: "/settings",
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              activeItem === item.name
                ? "bg-white shadow-md transform scale-105 rounded-md"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <Link
              to={item.route}
              className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
            >
              {item.icon}
              <span className={`${collapse ? "hidden" : "block"}`}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
        {/* <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
          >
            <HiOutlineHome className="w-6 h-6 text-gray-400 transition-colors duration-300" />
            <span className={`${collapse ? "hidden" : "block"}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/bookings"
            className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
          >
            <HiOutlineCalendarDays className="w-6 h-6 text-gray-400 transition-colors duration-300" />
            <span className={`${collapse ? "hidden" : "block"}`}>Bookings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/cabins"
            className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
          >
            <HiOutlineHomeModern className="w-6 h-6 text-gray-400 transition-colors duration-300" />
            <span className={`${collapse ? "hidden" : "block"}`}>Cabins</span>
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
          >
            <HiOutlineUsers className="w-6 h-6 text-gray-400 transition-colors duration-300" />
            <span className={`${collapse ? "hidden" : "block"}`}>Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-gray-600 font-medium transition-colors duration-300 py-3 px-4 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:text-gray-800"
          >
            <HiOutlineCog6Tooth className="w-6 h-6 text-gray-400 transition-colors duration-300" />
            <span className={`${collapse ? "hidden" : "block"}`}>Settings</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainNav;
