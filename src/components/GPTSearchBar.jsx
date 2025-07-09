import { useRef } from "react";
import openai from "../utils/openai";
import options from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };
  const handleSearchClick = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie recommendation system and suggest movies as per the query " +
      searchText.current.value +
      " Only return a comma-separated list of 5 real movie titles, no numbers, no quotes, no extra text.";

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      });
      console.log(chatCompletion.choices[0].message.content);
      const gptMovies = chatCompletion.choices[0].message.content.split(",");
      const data = gptMovies.map((movieName) => searchMovieInTMDB(movieName));
      const tmdbResults = await Promise.all(data);

      tmdbResults.forEach((result, index) => {
        console.log(`Results for "${gptMovies[index]}"`, result);
      });

      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("OpenAI Error:", error);
      alert(error.message); // optional: show user-friendly alert
    }
  };
  return (
    <div className="align-bottom mt-[20%] ml-[18%]">
      <form
        className="bg-black p-1 m-1 w-[80%]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-2 w-[60%] m-2 border-2 rounded-md text-white"
        />
        <button
          className="p-2 w-[30%] m-2 border-2 rounded-md bg-red-500 text-white"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
