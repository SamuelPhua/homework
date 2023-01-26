import React, { useState } from "react";

const Header = ({ fetchMovies, setSearch }) => {
  const [showWatchLater, setShowWatchLater] = useState(false);

  return (
    <header className="center-max-size header">
      <span className="brand">Movie App</span>
      <form className="form" onSubmit={fetchMovies}>
        <input
          onInput={(e) => setSearch(e.target.value)}
        />
      </form>
      <button className="button" onClick={() => setShowWatchLater(!showWatchLater)}>
        Watch Later
      </button>
    </header>
  );
};
export default Header;
