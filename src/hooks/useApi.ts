import axios, { AxiosResponse } from "axios";
import { useState } from "react";

type UseApiArgs = {
  urls: string[];
};

/**
 * Very simple setup of a hook for multiple get requests .
 * This could be extended with error handling in the function body, 
 * as well as REST-verbs and params in the UseApiArgs type.
 */

export const useApi = <T>({ urls }: UseApiArgs) => {
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<AxiosResponse<T>[]>([]);

  const fetch = async () => {
    setLoading(true);

    await axios
      .all(urls.map((url) => axios.get<T>(url)))
      .then((response) =>
        setResponses((responses) => [...responses, ...response])
      );

    setLoading(false);
  };

  return { fetch, data: responses.map((response) => response?.data), loading };
};
