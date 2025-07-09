import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
 if (
    !movies ||
    !movies.nowPlayingMovies?.length ||
    !movies.popularMovies?.length
  ) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className=" flex flex-col relative mt-120 bg-black w-screen aspect-video">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
         <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
               {/* <MovieList title={"Horror Movies"} movies={movies} /> */}
    </div>
  );
};

export default SecondaryContainer;
