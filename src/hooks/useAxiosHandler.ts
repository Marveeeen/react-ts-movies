import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { TMovieList } from "../components/Movies/types";
import { TResponseData } from "./type";

export const useAxiosHandler = (url: string) => {
  const [movieList, setMovieList] = useState<TMovieList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchHandler();
  }, []);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url,
        method: "GET",
      });

      const data = await response.data;

      const transformedData: TMovieList = data.results.map(
        (movie: TResponseData) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        }
      );

      setMovieList(transformedData);
    } catch (error: unknown) {
      if (error instanceof Error) setError(error);
      else setError(new Error("Something went wrong"));
    }
    setIsLoading(false);
  }, []);

  const axiosState = {
    movieList,
    isLoading,
    error,
  };

  const axiosHandler = {
    fetchHandler,
  };

  return { axiosState, axiosHandler };
};
