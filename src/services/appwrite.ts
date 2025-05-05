// import { DiscoverMovieModel } from '../models/MoviesAPIResponseModel'
// import { Client, Databases, Query } from 'react-native-appwrite'

// const databaseId = process.env.EXPO_PUBLIC_DATABASE_ID!
// const collectionId = process.env.EXPO_PUBLIC_METRICS_COLLECTION_ID!

// const client = new Client()
//   .setEndpoint('https://fra.cloud.appwrite.io/v1')
//   .setProject(process.env.EXPO_PUBLIC_APPWRITE_APP_ID!)

// const database = new Databases(client)

// export async function updateSearchCount({
//   movie,
//   query,
// }: {
//   query: string
//   movie: DiscoverMovieModel
// }) {
//   const result = await database.listDocuments(databaseId, collectionId, [
//     Query.equal('searchTerm', query),
//   ])
//   console.log('playwrite result', result)
// }
