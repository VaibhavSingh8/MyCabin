const TableOperations = ({ children, className }) => {
  return (
    <div className={`md:flex items-center gap-4 ${className}`}>{children}</div>
  );
};

export default TableOperations;
