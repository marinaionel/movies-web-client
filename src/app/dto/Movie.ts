import { MovieComment } from './MovieComment';
import { LanguageResponse } from './LanguageResponse';
import { GenreResponse } from './GenreResponse';
import { CountryResponse } from './CountryResponse';

export interface Movie{
  title: string;
  id: string;
  idString: string;
  year: string;
  poster: string;
  genres: GenreResponse;
  trailerYoutubeVideoId: string;
  boxOffice: string;
  languages: LanguageResponse;
  countries: CountryResponse;
  plot: string;
  runtime: string;
  releaseDate: string;
  comments: MovieComment[];
}
