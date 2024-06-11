import HeaderMenu from "./HeaderMenu";

const Header = ({ className }) => {
  return (
    <header
      className={`bg-indigo-500 w-full py-6 px-6 text-indigo-50 font-poppins font-medium rounded-b-xl text-center ${className}`}
    >
      <HeaderMenu />
    </header>
  );
};

export default Header;
