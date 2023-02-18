import React from "react";

import MovieList from "./components/Movies";
import { useAxiosHandler } from "./hooks/useAxiosHandler";

import { Section, Button } from "./styles";

const apiUrl: string = import.meta.env.VITE_API_FILMS_URL;

const App = () => {
  const { axiosState, axiosHandler } = useAxiosHandler(apiUrl);

  const { movieList, isLoading, error } = axiosState;
  const { fetchHandler } = axiosHandler;

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

  return (
    <React.Fragment>
      <Section>
        <Button onClick={fetchHandler}>Fetch movies</Button>
      </Section>
      <Section>{content}</Section>
    </React.Fragment>
  );
};

export default App;
