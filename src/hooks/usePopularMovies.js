import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import options from "../utils/constants";


// Fetching Now playing movies and adding it in store
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      console.log("Fetching popular movies...");

      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );

      if (!data.ok) {
        throw new Error(`HTTP Error: ${data.status}`);
      }

      const res = await data.json();
      console.log("Popular Movies API response:", res);

      dispatch(addPopularMovies(res.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;