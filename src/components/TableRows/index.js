import React, { useState, useEffect } from "react";

// import "./style.css";

function TableRows(props) {
  return props.users.map((item, index) => (
    <tr key={index}>
      <td>{item.name.first}</td>
      <td>{item.name.last}</td>
      <td>{item.email}</td>
      <td>{item.location.country}</td>
      <td>{item.location.city}</td>
    </tr>
  ));
}
export default TableRows;
