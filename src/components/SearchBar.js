import React from "react";

// search component
const SearchBar = (props) => {
  function filterResults(e) {
    const searchFilter = props.data.filter((data) =>
      data.unicodeName.includes(e)
    );
    props.filterData(searchFilter);
  }

  return (
    <input
      className="searchBar"
      placeholder={"search emoji"}
      onChange={(e) => filterResults(e.target.value)}
    />
  );
};

export default SearchBar;
