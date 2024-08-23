export interface IMovie {
  id: number | null;
  title: string | null;
  year: number | null;
  genre: string[] | null;
  rating: number | null;
  directors: string | null;
  actors: string[] | null;
  plot: string | null;
  poster: string | null;
  trailer: string | null;
  runtime: number | null;
  awards: string | null;
  country: string | null;
  language: string | null;
  boxOffice: string | null;
  production: string | null;
  website: string | null;
}

