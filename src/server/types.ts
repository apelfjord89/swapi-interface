export type MovieType = {
  results: {
    title: string;
    characters: string[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    release_date: string;
    url: string;
  }[];
};

export type Movie = MovieType["results"][number];

export type Character = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};
