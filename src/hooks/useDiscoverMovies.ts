import useSWR from 'swr'
import { MoviesAPIResponseModel } from '../models/MoviesAPIResponseModel'
import { useMemo } from 'react'

export default function useDiscoverMovies({ searchQuery }: { searchQuery?: string }) {
  const url = useMemo(() => {
    if (searchQuery) {
      return `/3/search/movie?query=${searchQuery}`
    }
    const searchParams = new URLSearchParams()
    searchParams.set('sort_by', 'popularity.desc')
    return `/3/discover/movie?${searchParams.toString()}`
  }, [searchQuery])

  const { data, error, isLoading } = useSWR<MoviesAPIResponseModel>(url)

  return { data, error, isLoading }
}
