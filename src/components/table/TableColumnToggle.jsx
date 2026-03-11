const TableColumnToggle = ({ table }) => {
    return (
        <div className="flex flex-wrap gap-3 mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            {table.getAllLeafColumns().map((column) => (
                <label key={column.id} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-colors select-none has-[:checked]:bg-gray-50 has-[:checked]:border-gray-500 has-[:checked]:text-gray-700">
                    <input
                        type="checkbox"
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500 cursor-pointer accent-gray-600"
                    />
                    <span className="capitalize">{column.id}</span>
                </label>
            ))}
        </div>
    );
};

export default TableColumnToggle;