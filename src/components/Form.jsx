const Form = ({ children, onSubmit, type = "regular", className = "" }) => {
  const formClasses = `overflow-hidden font-poppins rounded-lg bg-white ${
    type === "regular"
      ? "p-8 border border-gray-100"
      : type === "modal"
      ? "w-[60rem] p-8"
      : ""
  } ${className}`;

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      {children}
    </form>
  );
};

export default Form;
