import { useState } from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import TableToolbar from "./TableToolbar.jsx";
import TablePagination from "./TablePagination.jsx";
import TableColumnToggle from "./TableColumnToggle.jsx";

const DataTable = ({
    data,
    columns,
    title = "Data Table",
    subtitle = "Manage your data.",
    enableSorting = true,
    enableGlobalFilter = true,
    enableColumnVisibility = true,
    enablePagination = true,
}) => {
    const [rowSelection, setRowSelection] = useState({});
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnVisibility, setColumnVisibility] = useState({});
    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            columnVisibility,
            rowSelection,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: enableGlobalFilter ? getFilteredRowModel() : undefined,
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    });

    return (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mx-auto w-full max-w-full border border-gray-200 overflow-hidden fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200 gap-4">
                <div className="w-full sm:w-auto">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
                    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                </div>
                {enableGlobalFilter && (
                    <div className="w-full sm:w-auto">
                        <TableToolbar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                    </div>
                )}
            </div>

            {enableColumnVisibility && <TableColumnToggle table={table} />}

            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} colSpan={header.colSpan} className="bg-gray-50 text-gray-500 font-semibold text-xs uppercase tracking-wider p-4 border-b border-gray-200 sticky top-0 z-10">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="p-4 text-sm text-gray-700">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center p-12 text-gray-500 text-base">
                                    No results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {enablePagination && <TablePagination table={table} />}
        </div>
    );
};

export default DataTable;
