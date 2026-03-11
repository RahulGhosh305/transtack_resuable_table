import DataTable from "./components/table/DataTable";
import { usersData } from "./data/usersData.js";
import { createReusableColumns, CellRenderers } from "./components/table/TableHelpers.jsx";

function App() {
  const columns = createReusableColumns([
    {
      accessorKey: "id",
      header: "ID",
      cell: CellRenderers.Text("text-gray-500 font-medium tracking-wide")
    },
    {
      accessorKey: "name",
      header: "Student Name",
      sortable: true,
      cell: CellRenderers.Text("font-semibold text-gray-900")
    },
    {
      accessorKey: "email",
      header: "Email Address",
      sortable: true,
    },
    {
      accessorKey: "role",
      header: "Account Type",
      sortable: true,
      cell: CellRenderers.Badge({
        Admin: "bg-purple-100 text-purple-700 border-purple-200",
        Editor: "bg-blue-100 text-blue-700 border-blue-200",
        User: "bg-gray-100 text-gray-700 border-gray-200",
      })
    },
    {
      accessorKey: "status",
      header: "Status",
      sortable: true,
      cell: CellRenderers.Status("Active")
    },
    {
      accessorKey: "createdAt",
      header: "Joined Date",
      cell: CellRenderers.Date()
    }
  ]);

  return (
    <div className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-6 sm:mb-8 text-center pt-6 sm:pt-8 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-400">Reusable TanStack Table</h1>
        <p className="text-base sm:text-lg text-gray-500 px-2">
          A stunning, accessible, and robust data table built with React and Tailwind CSS.
        </p>
      </header>

      <main>
        <DataTable
          data={usersData}
          columns={columns}
          title="Student Table"
          subtitle="Manage your students and their details here."
          enableSorting={true}
          enableGlobalFilter={true}
          enableColumnVisibility={true}
          enablePagination={true}
        />
      </main>
    </div>
  );
}

export default App;
