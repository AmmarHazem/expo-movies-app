import { images } from '@/constants/images'
import { FlatList, Image, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { icons } from '@/constants/icons'
import useDiscoverMovies from '@/src/hooks/useDiscoverMovies'
import MovieCard from '@/src/component/MovieCard'

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('')

  const {
    data: discoverMoviesResponse,
    isLoading,
    error,
  } = useDiscoverMovies({ searchQuery: searchText })

  return (
    <View className="bg-primary w-full flex-1 justify-center items-center">
      <Image
        source={images.bg}
        resizeMode="cover"
        className="flex-1 absolute top-0 left-0 right-0 z-0"
      />
      <FlatList
        data={discoverMoviesResponse?.results ?? []}
        keyExtractor={(item) => item.id?.toString() ?? ''}
        numColumns={2}
        columnWrapperStyle={{ gap: 20, justifyContent: 'center', marginVertical: 16 }}
        contentContainerStyle={{ paddingBottom: 100, width: '100%' }}
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return <MovieCard movie={item} width={'45%'} />
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
                onChange={(e) => setSearchText(e.nativeEvent.text)}
              />
            </View>
          </>
        }
      />
    </View>
  )
}
