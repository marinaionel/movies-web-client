import { Movie } from './Movie';

export interface CrewMember{
  name: string;
  id: string;
  imageUrl: string;
  birth: string;
  description: string;
  directedMovies: Movie[];
  actedInMovies: Movie[];
}
