import { icons } from "@/constants/icons";
import { FC } from "react";
import { Image, View, TextInput, Pressable, Text } from "react-native";

const SearchBar: FC<SearchBarProps> = ({ onPress, placeholder }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="w-full gap-4 flex-row items-center h-12 bg-dark-200 rounded-full px-4 py-0">
        <Image source={icons.search} className="size-5" resizeMode="cover" tintColor={"#AB8BFF"} />
        <Text style={{ color: "white" }}>{placeholder ?? "Search"}</Text>
        {/* <TextInput
          className="flex-1 h-full ms-2 text-white"
          placeholder={placeholder ?? "Search"}
          // value=""
          onPress={onPress}
          // onChangeText={() => {}}
          placeholderTextColor={"#A8B5DB"}
        /> */}
      </View>
    </Pressable>
  );
};

interface SearchBarProps {
  onPress?: () => void;
  placeholder?: string;
}

export default SearchBar;
