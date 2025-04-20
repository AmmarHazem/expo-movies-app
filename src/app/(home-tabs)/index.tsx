import { Link } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";

const HomeScreen: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      <Link href={"/movie/batman"}>Movie Details</Link>
    </View>
  );
};

export default HomeScreen;
