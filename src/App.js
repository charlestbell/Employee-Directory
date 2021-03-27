import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import "./components/Table/Table";
import Table from "./components/Table/Table";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.getUsers()
      .then((res) => {
        console.log("Users ", res);
      })
      .catch((err) => this.setState({ error: err.message }));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Header </p>
        <Table />
      </header>
    </div>
  );
}

export default App;
