import { MovieReview } from './MovieReview';
import { Language } from './Language';
import { Genre } from './Genre';
import { Country } from './Country';
import { MovieRating } from './MovieRating';

export interface Movie{
  title: string;
  id: string;
  idString: string;
  year: string;
  posterUrl: string;
  genres: Genre[];
  trailerYoutubeVideoId: string;
  boxOffice: string;
  languages: Language[];
  countries: Country[];
  plot: string;
  runtime: string;
  releaseDate: string;
  comments: MovieReview[];
  ratings: MovieRating;
}
