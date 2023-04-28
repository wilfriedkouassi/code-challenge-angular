export interface PlanetRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Planet[];
}

export interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: URL[];
  films: URL[];
  created: Date;
  edited: Date;
  url: URL;
}
