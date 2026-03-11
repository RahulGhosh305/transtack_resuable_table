import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columnHelper = createColumnHelper();

// Reusable Sortable Header Component
export const SortableHeader = ({ column, label }) => (
  <button
    className="flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold w-full text-left"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {label}
    <ArrowUpDown className="w-4 h-4 ml-1 opacity-70" />
  </button>
);

// Built-in Cell Renderers
export const CellRenderers = {
  Text: (className = "text-gray-600") => (info) => (
    <span className={className}>{info.getValue()}</span>
  ),
  Badge: (colorMap = {}) => (info) => {
    const value = info.getValue();
    const colorClass = colorMap[value] || "bg-gray-100 text-gray-700 border-gray-200";
    return (
      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${colorClass}`}>
        {value}
      </span>
    );
  },
  Status: (activeValue = "Active") => (info) => {
    const status = info.getValue();
    const isActive = status === activeValue;
    return (
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}></div>
        <span className={`font-medium ${isActive ? "text-green-700" : "text-red-700"}`}>
          {status}
        </span>
      </div>
    );
  },
  Date: () => (info) => (
    <span className="text-gray-500">{new Date(info.getValue()).toLocaleDateString()}</span>
  ),
  Action: () => (info) => (
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900 cursor-pointer border-none bg-transparent">
      <MoreHorizontal className="w-5 h-5" />
    </button>
  )
};

/**
 * Creates TanStack columns based on a simplified configuration array.
 * 
 * @param {Array} configList - Array of configuration objects.
 * Example: { accessorKey: 'name', header: 'Name', sortable: true }
 */
export const createReusableColumns = (configList) => {
  return configList?.map((config) => {
    if (config.id === "actions") {
      return columnHelper.display({
        id: "actions",
        cell: config.cell || CellRenderers.Action()
      });
    }

    return columnHelper.accessor(config.accessorKey, {
      header: config.sortable
        ? ({ column }) => <SortableHeader column={column} label={config.header} />
        : config.header,
      cell: config.cell || CellRenderers.Text(),
    });
  });
};

