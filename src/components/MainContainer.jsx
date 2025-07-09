import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, id } = mainMovie;

  return (
    <div className="bg-black">
      <VideoTitle orTitle={original_title} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
