import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { FC } from "react";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "@/src/component/SearchBar";

const HomeScreen: FC = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 top-0" />
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-4 mx-auto" />
        <View className="flex-1">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
