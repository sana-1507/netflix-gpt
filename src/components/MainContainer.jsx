import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
//   console.log(movies);
  if(!movies) return;
  const mainMovie =movies[0];
//     let { original_title, overview } = null;
// if(mainMovie) {
  const { original_title, overview, id } = mainMovie;
//   console.log(JSON.stringify(mainMovie) + original_title + id)
//   }
  return (
    <div>
      Main
      <VideoTitle orTitle={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
