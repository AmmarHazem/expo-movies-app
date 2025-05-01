import { FC, useMemo } from 'react'
import { DimensionValue, Image, Pressable, Text, View } from 'react-native'
import { DiscoverMovieModel } from '../models/MoviesAPIResponseModel'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard: FC<MovieCardProps> = ({ width, movie }) => {
  const releaseYear = useMemo(() => {
    try {
      return movie.release_date?.split('-')[0] ?? ''
    } catch (error) {
      return ''
    }
  }, [movie.release_date])

  return (
    <Link href={`/movie/${movie.id}`} asChild>
      {/* <Text className="text-white">{movie.title}</Text> */}
      <Pressable
        style={{
          width: width ?? '29.6%',
        }}
      >
        <View style={{ width: '100%' }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
          <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
            {movie.title}
          </Text>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-1 mt-1">
              <Image source={icons.star} className="size-4" />
              <Text className="text-white">{Math.round((movie.vote_average ?? 0) / 2)}</Text>
            </View>
            <Text className="text-neutral-400">{releaseYear}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}

interface MovieCardProps {
  movie: DiscoverMovieModel
  width?: DimensionValue
}

export default MovieCard
