import React from "react";

const Search = (props) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmitQuery(props.query);
        }}
      >
        <input
          type="text"
          placeholder="Enter a show name"
          value={props.query}
          onChange={(e) => props.handleSearchInput(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Search;
