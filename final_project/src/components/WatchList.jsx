import React, { useState } from "react";

function WatchList() {
  const [watchLaterItems, setWatchLaterItems] = useState([]);

  function addToWatchLater(movie) {
    setWatchLaterItems([...watchLaterItems, movie]);
  }

  function removeFromWatchLater(movie) {
    setWatchLaterItems(watchLaterItems.filter((i) => i !== movie));
  }

  return (
    <div>
      <button onClick={() => addToWatchLater({ title: "Example Item" })}>
        Add to Watch Later
      </button>
      <ul>
        {watchLaterItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => removeFromWatchLater({ title: "Example Item" })}>
        Remove from Watch Later
      </button>
      <ul>
        {watchLaterItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
