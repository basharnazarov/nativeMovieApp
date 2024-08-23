import { IMovie } from "./types";

export const getMovieListAsync = async () => {
  try {
    const results: IMovie[] = await fetch("https://freetestapi.com/api/v1/movies").then(res => res.json());
    console.log(results);
    return results;
  } catch (error: any) {
    throw new Error(error.message ?? "Error");
  }
};