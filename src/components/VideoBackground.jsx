import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div
      style={{
        position: "fixed",
        top: "-5%",
        left: "-5%",
        width: "110vw",
        height: "110vh",
        zIndex: -1,
        background: "black",
      }}
    >
      <iframe
        style={{
          width: "120%",
          height: "120%",
          position: "absolute",
          top: "-10%",
          left: "-10%",
        }}
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0`}
        allow="autoplay"
        frameBorder="0"
      />
    </div>
  );
};

export default VideoBackground;
