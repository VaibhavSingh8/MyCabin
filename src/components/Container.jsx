// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className="w-full max-w-full mx-auto grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] max-h-screen">
      {children}
    </div>
  );
};

export default Container;
