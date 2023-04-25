export interface PlanetRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: Planet[];
}

export interface Planet {
  name: string;
}
