const TableToolbar = ({ globalFilter, setGlobalFilter }) => {
    return (
        <div className="flex justify-between w-full md:w-auto">
            <input
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm placeholder-gray-400"
                placeholder="Search all columns..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
        </div>
    );
};

export default TableToolbar;
