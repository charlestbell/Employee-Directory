import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import API from "./utils/API";
import "./components/Table";
import Table from "./components/Table";
import FilterBy from "./components/FilterBy";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});
  const [filter, setFilter] = useState("");
  const [filterColumn, setFilterColumn] = useState("first name");

  // Get users to populate the page
  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => setError({ error: err.message }));
  }, []);

  // Update filter everytime the user types in the find a user box.
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  // Sort users by column
  const sortBy = (event) => {
    event.preventDefault();
    let localUsers;
    switch (event.target.dataset.column) {
      case "firstName":
        localUsers = users.sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "lastName":
        localUsers = users.sort((a, b) => {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "email":
        localUsers = users.sort((a, b) => {
          if (a.email < b.email) {
            return -1;
          }
          if (a.email > b.email) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "country":
        localUsers = users.sort((a, b) => {
          if (a.location.country < b.location.country) {
            return -1;
          }
          if (a.location.country > b.location.country) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "city":
        localUsers = users.sort((a, b) => {
          if (a.location.city < b.location.city) {
            return -1;
          }
          if (a.location.city > b.location.city) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        break;

      default:
        localUsers = users;
        break;
    }
    setUsers([...localUsers]);
  };

  // Update state when user types in filter field
  const handleFilterChange = (event) => {
    setFilter("");
    setFilterColumn(event.target.dataset.filter);
  };

  // Filter the users by what's in the filter field
  const filterBy = (event) => {
    event.preventDefault();
    let localUsers;
    switch (filterColumn) {
      case "first name":
        localUsers = users.filter((user) => user.name.first === filter);
        break;
      case "last name":
        localUsers = users.filter((user) => user.name.last === filter);
        break;
      case "email":
        localUsers = users.filter((user) => user.email === filter);
        break;
      case "country":
        localUsers = users.filter((user) => user.location.country === filter);
        break;
      case "city":
        localUsers = users.filter((user) => user.location.city === filter);
        break;

      default:
        break;
    }

    setUsers([...localUsers]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Employees</p>
        <FilterBy
          filterBy={filterBy}
          handleInputChange={handleInputChange}
          filterColumn={filterColumn}
          handleFilterChange={handleFilterChange}
        />
        <Table users={users} sortBy={sortBy} />
      </header>
    </div>
  );
}

export default App;
