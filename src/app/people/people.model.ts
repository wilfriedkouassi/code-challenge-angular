export interface PeopleRepository {
  count: number;
  next?: URL;
  previous?: URL;
  results: People[];
}

export interface People {
  name: string;
  homeworld: URL;
}
