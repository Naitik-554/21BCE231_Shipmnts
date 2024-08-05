import { useEffect, useState } from "react";
import mockData from "./data";
import "./App.css";

const HeaderCell = ({ column, sorting, sortTable }) => {
  const isDescSorting = sorting.column === column && sorting.ascending === false;
  const isAscSorting = sorting.column === column && sorting.ascending === true;
  const futureSortingOrder = isDescSorting ? true : false;
  return (
    <th
      key={column}
      className="users-table-cell"
      onClick={() => sortTable({ column, ascending: futureSortingOrder })}
    >
      {column}
      {isDescSorting && <span>▼</span>}
      {isAscSorting && <span>▲</span>}
    </th>
  );
};

const Header = ({ columns, sorting, sortTable }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell
            column={column}
            sorting={sorting}
            key={column}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
};

const Content = ({ entries, columns }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column} className="users-table-cell">
              { entry[column] }
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const SearchBar = ({ searchTable }) => {
  const [searchValue, setSearchValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    searchTable(searchValue);
  };
  return (
    <div className="search-bar">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search here"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ column: "age", ascending: true });
  const [searchValue, setSearchValue] = useState("");
  const columns = ["id", "name", "age","role","hireDate","isActive","salary","department","projectsCompleted","lastLogin","accessLevel"];
  function sortTable(key, ascending) {
    setSorting({ key: key, ascending: ascending });
  }
  const searchTable = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };

  // useEffect(() => {
  //   // console.log(mockData)
  // }, [sorting, searchValue]);
  
  useEffect(()=> {
    setUsers(mockData);
  },[]);

  // useEffect(() => {
  //   const currentUsersCopy = [...users];
  //   const sortedCurrentUsers = currentUsersCopy.sort((a, b) => {
  //     return a[sorting.key].localeCompare(b[sorting.key]);
  //   });
  //   setUsers(
  //     sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
  //   );
  // }, [users, sorting]);

  return (
    <div>
      <SearchBar searchTable={searchTable} />
      <table className="users-table">
        <Header columns={columns} sorting={sorting} sortTable={sortTable} />
        <Content entries={users} columns={columns} />
      </table>
    </div>
  );
};

export default App;