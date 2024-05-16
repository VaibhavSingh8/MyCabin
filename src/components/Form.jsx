
const Form = ({ type, children, onSubmit }) => {
  const formClasses = `overflow-hidden font-poppins font-medium bg-white rounded-md ${
    type === "regular"
      ? "p-8 bg-gray-0 border border-gray-100 rounded-md"
      : type === "modal"
      ? "w-[60rem] p-8"
      : ""
  }`;

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      {children}
    </form>
  );
};

export default Form;
