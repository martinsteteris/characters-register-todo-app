export interface CharacterApiResponse {
  info: CharacterPages;
  results: Character;
}

export interface CharacterPages {
  count: number;
  pages: number;
  next: string;
  previous: string;
}

export interface Character {
  id: number;
  name: string;
  status: string
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}
