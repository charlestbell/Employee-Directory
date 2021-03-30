import React from "react";

function FilterBy(props) {
  return (
    <form>
      <div className="form-group">
        <div className="dropdown mb-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter By
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              href="#"
              data-filter="first name"
              onClick={props.handleFilterChange}
            >
              First Name
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-filter="last name"
              onClick={props.handleFilterChange}
            >
              Last Name
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-filter="email"
              onClick={props.handleFilterChange}
            >
              Email
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-filter="country"
              onClick={props.handleFilterChange}
            >
              Country
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-filter="city"
              onClick={props.handleFilterChange}
            >
              City
            </a>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder={"Enter " + props.filterColumn}
          onChange={props.handleInputChange}
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-light mx-1"
        onClick={props.filterBy}
      >
        Filter
      </button>
    </form>
  );
}
export default FilterBy;
