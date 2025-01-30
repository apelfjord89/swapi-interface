import { Movie } from "@/server/types";
import styles from "./movieCard.module.css";

type MovieCardProps = {
  movieData: Movie;
  onClick: (data: Movie) => void;
};

export const MovieCard = ({ movieData, onClick }: MovieCardProps) => {
  return (
    <div className={styles.movieCard} onClick={() => onClick(movieData)}>
      <div className={styles.subtitle}>Episode: {movieData?.episode_id}</div>
      <div className={styles.title}>{movieData?.title}</div>
      <div className={styles.subtitle}>
        Release date: {movieData?.release_date}
      </div>
    </div>
  );
};
