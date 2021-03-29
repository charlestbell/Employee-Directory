import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import "./components/Table";
import Table from "./components/Table";
import FilterBy from "./components/FilterBy";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setUsers(res.data.results);
        // setTimeout(console.log(users), 300);
      })
      .catch((err) => setError({ error: err.message }));
  }, []);

  // Update filter everytime the user types in the find a user box.
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const sortBy = (event) => {
    console.log(event.target.dataset.column);
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
  const filterBy = (event) => {
    event.preventDefault();

    let localUsers = users.filter((user) => user.name.first === filter);

    setUsers([...localUsers]);
  };
  // console.log(users);
  // console.log("Filter state", filter);
  return (
    <div className="App">
      <header className="App-header">
        <p>Employees</p>
        <FilterBy filterBy={filterBy} handleInputChange={handleInputChange} />
        <Table users={users} sortBy={sortBy} />
      </header>
    </div>
  );
}

export default App;
