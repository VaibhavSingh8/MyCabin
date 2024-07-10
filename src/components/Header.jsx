import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = ({ className }) => {
  return (
    <header
      className={`bg-indigo-500 w-full max-h-20 py-6 px-6 text-indigo-50 font-poppins font-medium rounded-b-xl flex justify-between items-center ${className}`}
    >
      <Logo />
      <HeaderMenu />
    </header>
  );
};

export default Header;
