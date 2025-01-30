import { useApi } from "@/hooks/useApi";
import { Character, Movie } from "@/server/types";
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "./movieDialog.module.css";

type MovieDialogProps = {
  movieData: Movie;
  onClose: VoidFunction;
};

export const MovieDialog = ({ movieData, onClose }: MovieDialogProps) => {
  const open = Boolean(movieData);

  const { fetch, loading, data } = useApi<Character>({
    urls: movieData?.characters,
  });

  useEffect(() => {
    if (!data.length) {
      fetch();
    }
  }, [open]);

  return (
    <div className={styles.movieDialogContainer}>
      <dialog open={open} className={styles.movieDialog}>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={styles.titleRow}>
              <h1>{movieData.title}</h1>
              <div className={styles.closeButton} onClick={onClose}>
                ×
              </div>
            </div>
            <hr className={styles.divider} />
            <h3 className={styles.title}>Characters:</h3>
            <div className={styles.columnContainer}>
              {data.map((char) => (
                <div key={char.name} className={styles.nameRow}>
                  {char.name}
                </div>
              ))}
            </div>
          </>
        )}
      </dialog>
    </div>
  );
};
