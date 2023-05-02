export type PeopleState = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleType[];
  currPeople: PeopleType | null;
  status: 'loading' | 'success' | 'error';
};

export type PeopleType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
};
