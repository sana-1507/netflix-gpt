import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
return <div className="flex relative border-2 bg-amber-700 m-2">
    <img  className="max-w-80 h-80" src={TMDB_IMAGE_URL+posterPath} alt="Movie Card" />
</div>
}

export default MovieCard;