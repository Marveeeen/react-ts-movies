import React, { useEffect, useState } from "react";

import MovieList from "./components/Movies";
import { TMovieList } from "./components/Movies/types";
import { generateMockMovieList } from "./components/utils/utils";

import { Section, Button } from "./styles";

const App = () => {
  const [movieList, setMovieList] = useState<TMovieList>([]);

  useEffect(() => {
    setMovieList(generateMockMovieList(20));
  }, []);

  const fetchHandler = () => {
    setMovieList(generateMockMovieList(Math.floor((Math.random() * 20) + 1)));
  };

  return (
    <React.Fragment>
      <Section>
        <Button onClick={fetchHandler}>Fetch movies</Button>
      </Section>
      <Section>
        <MovieList movieList={movieList} />
      </Section>
    </React.Fragment>
  );
};

export default App;
