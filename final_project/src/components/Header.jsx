import React, { useState } from "react";

const Header = ({ fetchMovies, setSearch }) => {
  const [showWatchLater, setShowWatchLater] = useState(false);

  return (
    <header className="center-max-size header">
      <span className="brand">Movie App</span>
      <form className="form" onSubmit={fetchMovies}>
      <button className="watchlater" onClick={() => setShowWatchLater(!showWatchLater)}>
        Watch Later
      </button>
        <input
          className="search" onInput={(e) => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};
export default Header;
