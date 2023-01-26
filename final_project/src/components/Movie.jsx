import React from "react";

const Movie = ({ movie, selectMovie, addToWatchLater }) => {
  const images = "https://image.tmdb.org/t/p/w500";

  return (
    <div onClick={() => selectMovie(movie)} className={"movie"}>
      <div className="movie-title">
        {movie.poster_path && (
          <img src={images + movie.poster_path} alt={movie.title} />
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
