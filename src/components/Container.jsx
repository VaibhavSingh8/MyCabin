// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    // <div className="w-full max-w-full mx-auto grid grid-cols-12 max-h-screen">
    //   {children}
    // </div>
    <div className="h-dvh grid grid-cols-12">{children}</div>
  );
};

export default Container;
