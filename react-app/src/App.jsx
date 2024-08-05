import Table from "./components/Table";
import mockData from "./data";

const columns = [
  { label: "Id", accessor: "id", sortable: true,  sortbyOrder: "asc" },
  { label: "Name", accessor: "name", sortable: false },
  { label: "Age", accessor: "age", sortable: true },
  { label: "Role", accessor: "role", sortable: false },
  { label: "Hire date", accessor: "hireDate", sortable: true },
  { label: "isActive", accessor: "isActive", sortable: true },
  { label: "Salary", accessor: "salary", sortable: true },
  { label: "Department", accessor: "department", sortable: true },
  { label: "Projects", accessor: "projectsCompleted", sortable: true },
  { label: "Last Login", accessor: "lastLogin", sortable: true },
  { label: "Access", accessor: "accessLevel", sortable: true },
];

const App = () => {
  return (
    <div className="table_container">
      <h1>Frontend Task</h1>
      <Table
        data={mockData}
        columns={columns}
      />
      <br />
    </div>
  );
};

export default App;