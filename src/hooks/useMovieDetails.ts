import useSWR from 'swr'
import { MovieDetailsResponseModel } from '../models/MovieDetailsResponseModel'

export default function useMovieDetails({ id }: { id?: string }) {
  const { data, error, isLoading } = useSWR<MovieDetailsResponseModel>(
    id ? `/3/movie/${id}?language=en-US` : null,
  )

  return { data, error, isLoading }
}
