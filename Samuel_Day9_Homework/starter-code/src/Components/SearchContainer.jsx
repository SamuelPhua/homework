import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [shows, setShows] = useState([]);

  const handleSearchInput = (searchText) => {
    setQuery(searchText);
  };

  const onSubmitQuery = (searchText) => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
      .then((response) => {
        setShows(response.data.map((show) => show.show));
        setHasSearched(true);
      });
  };

  const onSearchAgain = () => {
    setHasSearched(false);
    setQuery("");
  };

  return (
    <div>
      {hasSearched ? (
        <Results shows={shows} onSearchAgain={onSearchAgain} />
      ) : (
        <Search
          handleSearchInput={handleSearchInput}
          onSubmitQuery={onSubmitQuery}
          query={query}
        />
      )}
    </div>
  );
};

export default SearchContainer;
