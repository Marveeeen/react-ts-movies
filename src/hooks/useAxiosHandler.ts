import { useCallback, useState } from "react";

import axios from "axios";

export const useAxiosHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = useCallback(
    async <T>(
      requestConfig: { url: string; method: string; body?: T },
      applyData: (responseData: any) => void
    ) => {
      setIsLoading(true);
      try {
        const response = await axios({
          url: requestConfig.url,
          method: requestConfig.method,
          data: requestConfig.body,
        });

        if (!response.data) {
          throw new Error("Request failed!");
        }

        const responseData = await response.data;
        applyData(responseData);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error);
        else setError(new Error("Something went wrong"));
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};
