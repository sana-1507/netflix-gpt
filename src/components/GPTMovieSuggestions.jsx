import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;

  return (
    <div className="flex absolute flex-col mt-60 ml-2 bg-black w-screen aspect-video">
      {movieNames.map((name, index) => (
        <MovieList
          key={name}
          title={name}
          movies={movieResults[index]}
        ></MovieList>
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
