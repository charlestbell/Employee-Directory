import React from "react";

// import "./style.css";

function FilterBy(props) {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Find by Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter name"
          onChange={props.handleInputChange}
        ></input>
      </div>

      <button type="submit" class="btn btn-light" onClick={props.filterBy}>
        Filter
      </button>
    </form>
  );
}
export default FilterBy;
