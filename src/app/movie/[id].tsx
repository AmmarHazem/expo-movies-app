import useMovieDetails from '@/src/hooks/useMovieDetails'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { FC, useLayoutEffect } from 'react'
import {
  ActivityIndicator,
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { BlurView } from 'expo-blur'

const { width } = Dimensions.get('window')

const MovieScreen: FC = () => {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const { data, isLoading } = useMovieDetails({ id: id.toString() })

  useLayoutEffect(() => {
    navigation.setOptions({ title: data?.title ?? '' })
  }, [data?.title])

  if (isLoading || !data) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={'large'} style={{ marginVertical: 10 }} />
      </View>
    )
  }

  const posterUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : undefined

  return (
    <View style={{ flex: 1 }}>
      {/* Top Section */}
      <View style={{ height: 500 }}>
        <ImageBackground
          source={posterUrl ? { uri: posterUrl } : undefined}
          style={{ flex: 1, justifyContent: 'flex-end' }}
          blurRadius={20}
        >
          <BlurView intensity={60} style={StyleSheet.absoluteFill} />
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Image
              source={posterUrl ? { uri: posterUrl } : undefined}
              style={{
                width: width * 0.5,
                height: width * 0.75,
                borderRadius: 16,
                marginBottom: 16,
              }}
              resizeMode="cover"
            />
            <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
              {data.title}
            </Text>
            <Text style={{ color: '#fff', fontSize: 16, marginVertical: 4 }}>
              {data.release_date?.toString().slice(0, 4)} • {data.runtime} min
            </Text>
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
              {data.genres?.map((g) => (
                <Text key={g.id} style={{ color: '#fff', marginHorizontal: 4 }}>
                  {g.name}
                </Text>
              ))}
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy AED 59.99</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#fff', marginLeft: 10 }]}
              >
                <Text style={[styles.buttonText, { color: '#000' }]}>Rent AED 21.99</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginTop: 8,
                textAlign: 'center',
                paddingHorizontal: 16,
              }}
            >
              {data.overview}
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/* ...rest of your screen... */}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default MovieScreen
