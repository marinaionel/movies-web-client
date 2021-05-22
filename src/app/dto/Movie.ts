import { MovieComment } from './MovieComment';

export interface Movie{
  title: string;
  id: string;
  idString: string;
  year: string;
  poster: string;
  genre: string[];
  trailerYoutubeVideoId: string;
  boxOffice: string;
  language: string[];
  country: string;
  plot: string;
  runtime: string;
  releaseDate: string;
  comments: MovieComment[];
}
