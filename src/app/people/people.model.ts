export interface PeopleRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: People[];
}

export interface People {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: number;
  gender: string;
  homeworld: URL;

  films: URL[];
  species: URL[];
  vehicles: URL[];
  starships: URL[];
  created: string;
  edited: string;
  url: URL;
}
