import MainNav from "./MainNav";
import { useState } from "react";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";

const Sidebar = ({ className }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div
      className={`hidden p-6 relative w-[10px] lg:block transition-all duration-300 ease-linear ${
        collapse ? "lg:w-28" : "lg:w-64"
      }  ${className}`}
    >
      <div
        className={`absolute ${
          collapse ? "-right-7" : "-right-3"
        } top-14 mt-8 hidden cursor-pointer lg:block text-indigo-500`}
      >
        {collapse ? (
          <LuArrowBigRightDash className="h-10 w-10" onClick={handleCollapse} />
        ) : (
          <LuArrowBigLeftDash className="h-10 w-10" onClick={handleCollapse} />
        )}
      </div>
      <MainNav collapse={collapse} />
    </div>
  );
};

export default Sidebar;
