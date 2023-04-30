export interface SpecieRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Specie[];
}

export interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: number;
  homeworld: URL;
  language: string;
  people: URL[];
  films: URL[];
  created: Date;
  edited: Date;
  url: URL;
}
