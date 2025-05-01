import useSWR from "swr";
import { MoviesAPIResponseModel } from "../models/MoviesAPIResponseModel";

export default function useSearchMovies({ query }: { query: string }) {
  const { data, error, isLoading } = useSWR<MoviesAPIResponseModel>(`https://api.themoviedb.org/3/search/movie?query=${query}`);

  return { data, error, isLoading };
}
