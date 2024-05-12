import { createContext } from "react";

export const TableContext = createContext();

const Table = ({ children }) => {
    return (
      <table className="table-auto">
        <TableContext.Provider value={{}}>
          {children}
        </TableContext.Provider>
      </table>
    );
  };

  const Header = ({ children }) => {
    return (
      <thead>
        <tr>{children}</tr>
      </thead>
    );
  };
  
  const Row = ({ children }) => {
    return (
      <tr>{children}</tr>
    );
  };
  
	const Body = ({ children }) => {
			return (
					<tbody>{children}</tbody>
				);
	};

const Footer = ({ children }) => {
    return (
      <tfoot className="bg-gray-50 flex justify-center p-3 empty:hidden">{children}</tfoot>
    );
  };

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
