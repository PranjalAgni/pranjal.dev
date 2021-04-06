import { useCallback, useEffect, useState } from "react";

type RequestProps<T> = {
  url: RequestInfo;
  init?: RequestInit;
  processData?: (data: any) => T;
};

const useFetch = <T>({ url, init, processData }: RequestProps<T>) => {
  const [data, setData] = useState<T>();

  const [stringifiedUrl, stringifiedInit] = [url, init].map(elt =>
    JSON.stringify(elt)
  );

  const processJson = useCallback(
    processData || ((jsonBody: any) => jsonBody as T),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, init);
        if (response.status === 200) {
          const data = await response.json();
          const processedData = processJson(data);
          setData(processedData);
        } else {
          console.error(response.status, response.statusText);
        }
      } catch (err) {
        console.error("Error doing the API Call: ", err);
      }
    };

    fetchData();
  }, [stringifiedUrl, stringifiedInit]);

  return data;
};

export default useFetch;
