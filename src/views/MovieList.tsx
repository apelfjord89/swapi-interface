"use client";
import { Button } from "@/components/Button/Button";
import { CardCarousel } from "@/components/CardCarousel/CardCarousel";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import { MovieDialog } from "@/components/MovieDialog/MovieDialog";
import { useApi } from "@/hooks/useApi";
import { Movie, MovieType } from "@/server/types";
import { useState } from "react";
import styles from "./movieList.module.css";

export const MovieList = () => {
  const [movieData, setMovieData] = useState<Movie | undefined>(undefined);
  const { fetch, data, loading } = useApi<MovieType>({
    urls: ["https://swapi.dev/api/films/"],
  });

  const movies = data[0]?.results;

  return (
    <>
      <div className={styles.movieList}>
        {!movies && (
          <div>
            <p>Click the button to fetch the movies!</p>
            <Button title="Fetch movies" onClick={fetch} loading={loading} />
          </div>
        )}
        {movies && (
          <CardCarousel>
            {movies.map((props) => (
              <MovieCard
                key={`${props.episode_id}-${props.title}`}
                movieData={props}
                onClick={(movieData) => setMovieData(movieData)}
                {...props}
              />
            ))}
          </CardCarousel>
        )}
        {/* This will mount/unmount the dialog between clicks */}
        {movieData && (
          <MovieDialog
            movieData={movieData}
            onClose={() => setMovieData(undefined)}
          />
        )}
      </div>
    </>
  );
};
