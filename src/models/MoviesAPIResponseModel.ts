export interface MoviesAPIResponseModel {
  page?: number;
  results?: DiscoverMovieModel[];
  total_pages?: number;
  total_results?: number;
}

export interface DiscoverMovieModel {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
