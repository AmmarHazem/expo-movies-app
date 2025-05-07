import useMovieDetails from '@/src/hooks/useMovieDetails'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { FC, useLayoutEffect, useMemo } from 'react'
import { Text, ActivityIndicator, Image, Pressable, View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { icons } from '@/constants/icons'

const MovieScreen: FC = () => {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const { data, isLoading } = useMovieDetails({ id: id.toString() })

  useLayoutEffect(() => {
    navigation.setOptions({ title: data?.title ?? '' })
  }, [data?.title])

  const overviewText = useMemo(() => {
    const text = data?.overview ?? ''
    const limit = 200
    if (text.length > limit) {
      return text.slice(0, limit) + '...'
    }
    return text
  }, [data?.overview])

  if (isLoading || !data) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} style={{ marginVertical: 10 }} />
      </View>
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Top Section */}
      <View style={{ height: 500, position: 'relative' }}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
          className="w-full h-[80%]"
          resizeMode="cover"
        />
        <LinearGradient
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
          colors={['black', 'transparent']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0.5 }}
          locations={[0.4, 1]}
        />
        <View className="flex-1 z-20 justify-end p-4 absolute inset-0">
          <View className="flex-row items-center justify-between gap-4">
            <Pressable
              className="bg-white rounded-lg px-4 py-4 flex-1"
              onPress={() => navigation.goBack()}
            >
              <Text className="font-semibold text-center">Buy AED 59.5</Text>
            </Pressable>
            <Pressable
              className="bg-white rounded-lg px-4 py-4 flex-1"
              onPress={() => navigation.goBack()}
            >
              <Text className="font-semibold text-center">Rent AED 29.5</Text>
            </Pressable>
          </View>
          <Text className="text-white mt-4">{overviewText}</Text>
          <View className="flex-row mt-4 items-center">
            <Image source={icons.star} className="size-4 me-1" />
            <Text className="text-white font-semibold">{Math.round(data.vote_average ?? 0)}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MovieScreen
