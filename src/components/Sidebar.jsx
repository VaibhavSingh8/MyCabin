import MainNav from "./MainNav";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="p-6 sm:col-span-2">
      <Logo />
      <MainNav />
    </div>
  );
};

export default Sidebar;
