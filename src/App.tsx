import React, { useCallback, useEffect, useState } from "react";
import AddMovie from "./components/AddMovie/AddMovie";

import MovieList from "./components/Movies";
import { TMovie, TMovieList } from "./components/Movies/types";
import { API_URL } from "./constants";
import { TResponseData } from "./hooks/type";

import { useAxiosHandler } from "./hooks/useAxiosHandler";

import { Section, Button } from "./styles";

const App = () => {
  const [movieList, setMovieList] = useState<TMovieList>([]);

  const { isLoading, error, sendRequest: fetchMovies } = useAxiosHandler();

  const transformMovieList = useCallback((movieListObj: TResponseData) => {
    let loadedMovieList = [];

    for (const key in movieListObj) {
      loadedMovieList.push({
        id: key,
        title: movieListObj[key].title,
        openingText: movieListObj[key].openingText,
        releaseDate: movieListObj[key].releaseDate,
      });
    }

    setMovieList(loadedMovieList);
  }, []);

  useEffect(() => {
    fetchMovies({ url: API_URL, method: "GET" }, transformMovieList);
  }, [fetchMovies, transformMovieList]);

  let content: JSX.Element = <p>No movie list found.</p>;

  if (movieList.length > 0) {
    content = <MovieList movieList={movieList} />;
  }

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const addMovieHandler = (newMovie: TMovie) => {
    setMovieList((prevMovieList) => {
      return [...prevMovieList, newMovie];
    });
  };

  const fetchHandler = () => {
    fetchMovies({ url: API_URL, method: "GET" }, transformMovieList);
  };

  return (
    <React.Fragment>
      <Section>
        <AddMovie onAddMovie={addMovieHandler} />
      </Section>
      <Section>
        <Button onClick={fetchHandler}>Fetch movies</Button>
      </Section>
      <Section>{content}</Section>
    </React.Fragment>
  );
};

export default App;
