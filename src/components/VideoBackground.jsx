import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => {
    return store.movie.trailerVideo;
  });

  useMovieTrailer(movieId);

  return (
    <div className="flex absolute w-[100%] h-[100%] top-0 left-0">
      <iframe
        className=""
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
