import { images } from '@/constants/images'
import { ActivityIndicator, FlatList, Image, Text, TextInput, View } from 'react-native'
import { useEffect, useMemo, useState } from 'react'
import { icons } from '@/constants/icons'
import useDiscoverMovies from '@/src/hooks/useDiscoverMovies'
import MovieCard from '@/src/component/MovieCard'

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText)

  useEffect(() => {
    console.log('debouncedSearchText', debouncedSearchText)
  }, [debouncedSearchText])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchText])

  const moviesSearchParams = useMemo(() => {
    const value = new URLSearchParams()
    value.set('sort_by', 'vote_average.desc')
    return value
  }, [])

  const {
    data: discoverMoviesResponse,
    isLoading,
    error,
  } = useDiscoverMovies({ searchQuery: debouncedSearchText, searchParams: moviesSearchParams })

  const {
    data: popularMovies,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useDiscoverMovies({})

  const listViews = useMemo<{ key: string; view: JSX.Element }[]>(() => {
    const moviesList = discoverMoviesResponse?.results ?? []
    return [
      ...moviesList.map<{ key: string; view: JSX.Element }>((movie) => {
        return { key: movie.id?.toString() ?? '', view: <MovieCard movie={movie} width={'45%'} /> }
      }),
    ]
  }, [discoverMoviesResponse?.results])

  return (
    <View className="bg-primary w-full flex-1 justify-center items-center">
      <Image
        source={images.bg}
        resizeMode="cover"
        className="flex-1 absolute top-0 left-0 right-0 z-0"
      />
      <FlatList
        data={listViews}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={{ gap: 20, justifyContent: 'center', marginVertical: 16 }}
        contentContainerStyle={{ paddingBottom: 100, width: '100%' }}
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return item.view
        }}
        ListHeaderComponent={
          <>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-4 mx-auto" />
            <View className="w-full gap-4 flex-row items-center h-12 bg-dark-200 rounded-full px-4 py-0">
              <Image
                source={icons.search}
                className="size-5"
                resizeMode="cover"
                tintColor={'#AB8BFF'}
              />
              <TextInput
                placeholder="Search..."
                className="text-white flex-1 h-full"
                autoFocus={true}
                placeholderTextColor={'white'}
                value={searchText}
                clearButtonMode="while-editing"
                keyboardType="web-search"
                onChange={(e) => setSearchText(e.nativeEvent.text)}
              />
            </View>
            <FlatList
              data={popularMovies?.results ?? []}
              keyExtractor={(item) => item.id?.toString() ?? ''}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              // ItemSeparatorComponent={() => <View className="w-2 h-10 bg-red-700" />}
              contentContainerStyle={{
                gap: 20,
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ position: 'relative' }}>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 50,
                        left: -10,
                        zIndex: 10,
                        fontSize: 50,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {index + 1}
                    </Text>
                    <MovieCard movie={item} width={200} />
                  </View>
                )
              }}
            />
            {isLoading && <ActivityIndicator className="my-4" size={'large'} color={'#0000FF'} />}
            {error && (
              <Text className="text-white w-full text-center my-4">Something went wrong</Text>
            )}
          </>
        }
        ListEmptyComponent={
          <>
            <Text className="text-white font-semibold w-full text-center my-8">
              No results for {searchText}
            </Text>
          </>
        }
      />
    </View>
  )
}
