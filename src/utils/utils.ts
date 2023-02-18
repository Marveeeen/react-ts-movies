import { TMovie, TMovieList } from "../components/Movies/types";

const getRandomDate = (): string => {
  const start = new Date(2023, 0, 1);
  const end = new Date(2023, 11, 31);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  let month = randomDate.getMonth() + 1;
  let day = randomDate.getDate();
  const year = randomDate.getFullYear();

  const sanitizedMonth = month < 10 ? "0" + month : month;
  const sanitizedDay = day < 10 ? "0" + day : day;

  return `${sanitizedMonth}-${sanitizedDay}-${year}`;
};

export const generateMockMovieList = (numberOfData: number) => {
  let movieList: TMovieList = [];

  for (let i = 1; i < numberOfData; i++) {
    let mockMovie: TMovie = {
      id: `m${i}`,
      title: `Sample ${i}`,
      releaseDate: getRandomDate(),
      openingText: `This is a mock sample 0${i} data only`,
    };

    movieList.push(mockMovie);
  }

  return movieList;
};
