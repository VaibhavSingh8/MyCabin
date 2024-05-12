import MainNav from "./MainNav";
import Logo from "./Logo";

const Sidebar = ({ className }) => {
  return (
    <div className={`p-6 ${className}`}>
      <Logo />
      <MainNav />
    </div>
  );
};

export default Sidebar;