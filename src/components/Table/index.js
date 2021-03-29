import React from "react";

// import "./style.css";

function Table(props) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th data-column="firstName" onClick={props.sortBy}>
            Firstname
          </th>
          <th data-column="lastName" onClick={props.sortBy}>
            Lastname
          </th>
          <th data-column="email" onClick={props.sortBy}>
            Email
          </th>
          <th data-column="country" onClick={props.sortBy}>
            Country
          </th>
          <th data-column="city" onClick={props.sortBy}>
            City
          </th>
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
