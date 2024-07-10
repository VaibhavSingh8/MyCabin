import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const MainNav = ({ collapse }) => {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
