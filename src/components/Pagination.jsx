import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Pagination = ({totalResults, currentPage, onPrevPage, onNextPage, itemsPerPage}) => {

    const totalPages = Math.ceil( totalResults / itemsPerPage);
     if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between w-full shadow-sm rounded border border-gray-200 border-t-0 p-4 bg-gray-50">
        <p className="text-base ml-2">
            Showing <span className="font-semibold" >{(currentPage - 1) * itemsPerPage + 1}
            </span> to <span className="font-semibold" >{currentPage === totalPages ?  totalResults : currentPage * itemsPerPage}</span> of <span className="font-semibold">
            {totalResults}</span> results
        </p>
        <div className="flex gap-1.5 mr-4">
            <button onClick={onPrevPage} className="flex items-center justify-center gap-1 px-2 py-1.5 font-medium text-base rounded-md hover:bg-indigo-500 hover:text-indigo-50"> 
                <HiChevronLeft /> <span>Previous</span> 
            </button>
            <button onClick={onNextPage} className="flex items-center justify-center gap-1 px-2 py-1.5 font-medium text-base rounded-md hover:bg-indigo-500 hover:text-indigo-50"> 
                <span>Next</span> <HiChevronRight />
            </button>
        </div>
    </div>
  )
}

export default Pagination