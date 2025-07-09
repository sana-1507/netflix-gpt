import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col relative right-5 overflow-x-scroll whitespace-nowrap hide-scrollbar bg-black -ml-36">
      <h1 className=" m-4 mb-2 text-2xl font-semibold text-white font-sans self-start">
        {title}
      </h1>
      <div className="flex flex-row w-lvw">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
