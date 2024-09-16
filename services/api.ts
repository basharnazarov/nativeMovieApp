import { IMovie } from "./types";

export const getMovieListAsync = async () => {
  try {
    // console.log(results);
    return await fetch("https://freetestapi.com/api/v1/movies").then(res => res.json()).then((data) => data);
  } catch (error: any) {
    throw new Error(error?.message ?? "Error");
  }
};

export const getMovieListAsyncBySearch = async (text: string) => {
  try {
    const results: IMovie[] = await fetch(`https://freetestapi.com/api/v1/movies?limit=30&search=${text}`).then(res => res.json());
    // console.log(results);
    return results;
  } catch (error: any) {
    throw new Error(error.message ?? "Error");
  }
};