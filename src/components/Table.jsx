//import { createContext } from "react";

//export const TableContext = createContext();

const Table = ({ children }) => {
  return (
		<div className="overflow-auto">
			<table className="table-auto w-full shadow-md mt-5 rounded border border-gray-200 bg-gray-0 overflow-auto text-base font-poppins">
				{children}
			</table>
		</div>
  );
};

const Header = ({ children }) => {
  return (
    <thead className="bg-gray-50 border-b border-gray-100 text-uppercase tracking-widest font-semibold text-gray-600">
      <tr>{children}</tr>
    </thead>
  );
};

const Row = ({ children }) => {
  return <tr className="items-center border-b border-gray-100 last:border-b-0 text-gray-600">{children}</tr>;
};

// Using Render props pattern
const Body = ({ data, render }) => {
  if (!data.length) return <p className="text-center m-10">No data to show at the moment</p>;
  return <tbody className="bg-white">{data.map(render)}</tbody>;
};

const Footer = ({ children }) => {
  return <tfoot className="bg-gray-50 flex justify-center p-3 empty:hidden">{children}</tfoot>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
