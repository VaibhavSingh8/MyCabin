import { HiOutlineUser } from "react-icons/hi2";
import { Logout } from "../features/authentication/Logout";
import Button from "./Button";
//import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  //const navigate = useNavigate();
  return (
    <div className="lg:mr-6">
      <ul className="flex gap-2 justify-end">
        <li>
          <Button>
            <HiOutlineUser className="w-6 h-6" />
          </Button>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
