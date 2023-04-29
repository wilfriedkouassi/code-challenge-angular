export interface FilmRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Film[];
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  created: Date;
  edited: Date;
  url: URL;

  characters: URL[],
  planets: URL[],
  starships: URL[],
  vehicles: URL[],
  species: URL[]
}
