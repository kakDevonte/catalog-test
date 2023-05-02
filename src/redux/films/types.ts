export type FilmsState = {
  results: FilmType[];
  currFilm: FilmType | null;
  status: 'loading' | 'success' | 'error';
};

export type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  url: string;
};
