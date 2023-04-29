export interface VehicleRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Vehicle[];
}

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: [];
  films: URL[];
  created: string;
  edited: string;
  url: URL;
}
