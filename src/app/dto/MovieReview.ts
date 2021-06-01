import { Account } from './Account';

export interface MovieReview{
  text: string;
  title: string;
  rating: number;
  account: Account;
  movieId: string;
}
