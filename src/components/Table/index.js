import React, { useState, useEffect } from "react";

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
        {props.users.map((item, index) => (
          <tr key={index}>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.location.country}</td>
            <td>{item.location.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
