import React from "react";

import { TMovieProps } from "./types";

import { StyledLi, StyledH2, StyledH3 } from "./styles";

const Movie = ({ title, releaseDate, openingText }: TMovieProps) => {
  return (
    <StyledLi>
      <StyledH2>{title}</StyledH2>
      <StyledH3>{releaseDate}</StyledH3>
      <p>{openingText}</p>
    </StyledLi>
  );
};

export default Movie;
