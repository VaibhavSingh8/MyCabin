import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../components/Button";
import { useLogout } from "./useLogout";

export function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <Button disabled={isLoading} onClick={logout}>
      <HiArrowRightOnRectangle className="w-6 h-6" />
    </Button>
  );
}
