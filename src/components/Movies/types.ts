export type TMovie = {
  id: string;
  title: string;
  releaseDate: string;
  openingText: string;
};

export type TMovieList = TMovie[];

export type TMovieListProps = {
  movieList: TMovieList
};
