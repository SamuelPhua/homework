import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import YouTube from "react-youtube";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [singleMovie, setSingleMovie] = useState({ title: "Loading Movies" });

  const MOVIE_API = "https://api.themoviedb.org/3/";
  const API_KEY = "84f7adca7d5ad61fa5954db01687a8f7";
  const images = "https://image.tmdb.org/t/p/w500";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";

  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(`${search ? SEARCH_API : DISCOVER_API}`, {
      params: {
        api_key: API_KEY,
        query: search,
      },
    });

    console.log(data.results[0]);
    setMovies(data.results);
    setSingleMovie(data.results[0]);

    if (data.results.length) {
      await fetchSingleMovie(data.results[0].id);
    }
  };

  const fetchSingleMovie = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setSingleMovie(data);
  };

  const selectMovie = (movie) => {
    fetchSingleMovie(movie.id);
    setPlaying(false);
    setSingleMovie(movie);
    window.scrollTo(0, 0);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <Movie selectMovie={selectMovie} key={movie.id} movie={movie} />
    ));

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header fetchMovies={fetchMovies} setSearch={setSearch} />
      {movies.length ? (
        <main>
          {singleMovie ? (
            <div
              className="poster"
              style={{
                backgroundImage: `url(${images}${singleMovie.backdrop_path})`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    opts={{
                      width: "1280",
                      height: "600",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className={"button close-video"}
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="center-max-size">
                  <div className="poster-content">
                    {trailer ? (
                      <button
                        className={"button play-video"}
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1>{singleMovie.title}</h1>
                    <p>{singleMovie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          <div className={"center-max-size container"}>{renderMovies()}</div>
        </main>
      ) : (
        "Sorry, no movies found"
      )}
    </div>
  );
};

export default App;
