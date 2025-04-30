import useSWR from "swr";
import { MoviesAPIResponseModel } from "../models/MoviesAPIResponseModel";
import { useMemo } from "react";

export default function useDiscoverMovies() {
  const url = useMemo(() => {
    const searchParams = new URLSearchParams();
    searchParams.set("sort_by", "popularity.desc");
    return `/3/discover/movie?${searchParams.toString()}`;
  }, []);
  const { data, error, isLoading } = useSWR<MoviesAPIResponseModel>(url);

  console.log("useDiscoverMovies", data);

  return { data, error, isLoading };
}
