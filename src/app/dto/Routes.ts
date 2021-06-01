export abstract class Routes{
  // movie
  public static GET_MOVIE_BY_ID = 'https://moviesss.azurewebsites.net/api/Movie/';
  public static GET_MOCKED_MOVIE = './config/movies-mock.json';

  // charts
  public static GET_ALL_CHARTS = 'https://moviesss.azurewebsites.net/api/Chart/all';
  public static GET_ALL_CHARTS_PARAM_MAX = '100';
  public static GET_ALL_CHARTS_PARAM_OFFSET = '0';

  // search
  public static GET_SEARCH = 'https://moviesss.azurewebsites.net/api/Search/';

  // crew
  public static GET_CREW_MEMBER_BY_ID = 'https://moviesss.azurewebsites.net/api/Crew/';


  // navigation
  public static BASE_DETAILS_URL = '/details';
  public static CREW_DETAILS_URL = '/crew-details';

}
