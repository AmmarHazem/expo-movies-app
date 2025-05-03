import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { FC } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import SearchBar from '@/src/component/SearchBar'
import useDiscoverMovies from '@/src/hooks/useDiscoverMovies'
import MovieCard from '@/src/component/MovieCard'

const HomeScreen: FC = () => {
  const router = useRouter()
  const { data: discoverMoviesResponse, isLoading, error } = useDiscoverMovies({})

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 top-0" />
      <View
        className="flex-1 px-4"
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-4 mx-auto" />
        {isLoading ? (
          <ActivityIndicator className="mt-10 self-center" size={'large'} color={'#0000FF'} />
        ) : error ? (
          <Text style={{ color: 'white' }}>Something went wrong</Text>
        ) : (
          <>
            <SearchBar onPress={() => router.push('/search')} placeholder="Search for a movie" />
            <FlatList
              ListHeaderComponent={
                <>
                  <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
                </>
              }
              data={discoverMoviesResponse?.results ?? []}
              keyExtractor={(item) => item.id?.toString() ?? ''}
              numColumns={3}
              columnWrapperStyle={{ gap: 20, justifyContent: 'center', marginVertical: 16 }}
              contentContainerStyle={{ paddingBottom: 100 }}
              renderItem={({ item }) => {
                return <MovieCard movie={item} />
              }}
            />
          </>
        )}
      </View>
    </View>
  )
}

export default HomeScreen
