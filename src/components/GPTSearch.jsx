import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-transparent">
        <img
          className="flex absolute max-w-[100%] w-[100%] h-[100%] -z-10 left-0 top-0 default-ltr-cache-1e28eon"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_small.jpg 959w"
          alt=""
          aria-hidden="true"
        ></img>
      </div>
      GPT
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
