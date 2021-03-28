import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import "./components/Table";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    API.getUsers()
      .then((res) => {
        setUsers(res.data.results);
        // setTimeout(console.log(users), 300);
      })
      .catch((err) => setError({ error: err.message }));
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
    setUsers([...localUsers]);

    // setTimeout(console.log("Users ", users), 300);
  };

  // Force an update inside a functional component
  // useEffect(() => {
  //   const [value, setValue] = useState(0); // integer state
  //   return () => setValue((value) => value + 1); // update the state to force render // Copied from stack overflow https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render
  // }, [users]);

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
