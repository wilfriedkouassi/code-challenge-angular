export interface StarshipRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Starship[];
}

export interface Starship {

  name: string, 
  model: string, 
  manufacturer: string, 
  cost_in_credits: number, 
  length: number, 
  max_atmosphering_speed: number, 
  crew: string, 
  passengers: number, 
  cargo_capacity: number, 
  consumables: string, 
  hyperdrive_rating: number 
  MGLT: number, 
  starship_class: string, 

  pilots: URL[], 
  films: URL[], 

  created: string;
  edited: string;
  url: URL;
}
