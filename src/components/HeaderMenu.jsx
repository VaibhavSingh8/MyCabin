import { HiOutlineUser } from "react-icons/hi2";
//import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  //const navigate = useNavigate();
  return (
    <div className="lg:mr-6">
      <ul className="flex gap-2 justify-end">
        <li>
          <button
            className="bg-transparent border-none
           rounded-sm transition-all duration-200 hover:bg-gray-100 p-2"
          >
            <HiOutlineUser className="w-6 h-6" />
          </button>
        </li>
        <li className="p-2">
          <HiOutlineUser className="w-6 h-6" />
        </li>
        {/* <li></li> */}
      </ul>
    </div>
  );
}

export default HeaderMenu;
