const TablePagination = ({ table }) => {
    return (
        <div className="flex items-center justify-between mt-6 px-2">
            <span className="text-sm text-gray-700">
                Page <span className="font-semibold">{table.getState().pagination.pageIndex + 1}</span> of{" "}
                <span className="font-semibold">{table.getPageCount()}</span>
            </span>

            <div className="flex gap-2">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Prev
                </button>

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TablePagination;
