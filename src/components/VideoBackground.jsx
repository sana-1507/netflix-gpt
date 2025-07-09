import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => {
    return store.movie.trailerVideo;
  });

  useMovieTrailer(movieId);

  return (
    <div className="flex absolute w-full h-screen overflow-hidden top-0 left-0 bottom-0">
      <iframe
        className="w-full h-full"

        src={"https://www.youtube.com/embed/" + trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        controls="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
