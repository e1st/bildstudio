import { useEffect, useState } from "react";
import { getProjects } from "../services/ProjectsService";

export const useProjects = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getProjectsAsync = async () => {
      try {
        const projects = await getProjects();
        setData(projects.data.response);
        setIsLoaded(true);
      } catch (error) {
        setData([]);
        setIsLoaded(false);
        console.error(`Error fetching data: ${error || error?.message}`);
      }
    };

    getProjectsAsync();

    return () => {
      setData([]);
      setIsLoaded(false);
    };
  }, []);

  return [data, isLoaded];
};
