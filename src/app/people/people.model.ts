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
  skin_color:string;
  eye_color: string;
  birth_year: number;
  gender: string;
  homeworld: URL;

  films: [] //Film[];
  species: []// Specie[];
  vehicles: []//Vehicle[];
  starships: []//Starships[];
  created: string;
  edited: string;
  url: URL;


}
