import React from "react";

import Movie from "./Movie/Movie";

import { StyledUl } from "./styles";
import { TMovieListProps } from "./types";

const MovieList = ({ movieList }: TMovieListProps) => {
  return (
    <StyledUl>
      {movieList.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </StyledUl>
  );
};

export default MovieList;
