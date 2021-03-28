import React, { useState, useEffect } from "react";
import TableRows from "../TableRows";

// import "./style.css";

function Table(props) {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setUsers(props.users);
  // }, []);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <TableRows users={props.users} />
      </tbody>
    </table>
  );
}
export default Table;
