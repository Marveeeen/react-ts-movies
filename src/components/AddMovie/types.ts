import { TMovie } from "../Movies/types";

export type TAddMovieProps = {
  onAddMovie: (movie: TMovie) => void;
};

export type TSentMovie = {
  title: string;
  openingText: string;
  releaseDate: string;
};
