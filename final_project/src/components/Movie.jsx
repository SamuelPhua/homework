import React from "react";
import WatchLaterList from "./WatchList";

const Movie = ({ movie, selectMovie, addToWatchLater }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

  return (
    <div onClick={() => selectMovie(movie)} className={"movie"}>
      <div className="movie-title">
        {movie.poster_path && (
          <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
        )}
        <div className={"movie-infos"}>
          <h5 className={"movie-title"}>{movie.title}</h5>
          <button className="button" onClick={() => addToWatchLater(movie)}>Add to Watch Later</button>
          {movie.vote_average ? (
            <span className={"movie-voting"}>{movie.vote_average}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
