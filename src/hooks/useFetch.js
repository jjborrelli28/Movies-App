import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ data: null, error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData({ data, error: null });
      } catch (error) {
        setData({ data: null, error });
      }
    };
    fetchData();
  }, [url]);

  return data;
};
