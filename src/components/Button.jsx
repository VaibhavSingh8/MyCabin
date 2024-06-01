
const Button = ({
  type = "submit",
  className = "",
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={` font-poppins bg-indigo-500 hover:bg-indigo-600 font-bold py-2 px-4 rounded-md ${className}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
