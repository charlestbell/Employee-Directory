import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import "./components/Table";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setUsers(res.data.results);
        // setTimeout(console.log(users), 300);
      })
      .catch((err) => this.setState({ error: err.message }));
  }, []);

  const sortBy = () => {
    let localUsers = users.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    console.log("localUsers ", localUsers);
    setUsers(localUsers);
    // setTimeout(console.log("Users ", users), 300);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Employees</p>
        <button onClick={sortBy}>
          <h3>Sort by Name</h3>
          {/* <h3>Filter by</h3> */}
        </button>
        <Table users={users} />
      </header>
    </div>
  );
}

export default App;
