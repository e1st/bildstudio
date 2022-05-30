import { useState, useEffect } from "react";
import { getAboutUs } from "../services/AboutService";

export const useAboutUs = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getDataAsync = async () => {
      try {
        const response = await getAboutUs();
        setData(response.data.response);
        setIsLoaded(true);
      } catch (error) {
        setData([]);
        setIsLoaded(false);
        console.error(`Error fetching data: ${error || error?.message}`);
      }
    };

    getDataAsync();

    return () => {
      setData([]);
      setIsLoaded(false);
    };
  }, []);

  return [data, isLoaded];
};
