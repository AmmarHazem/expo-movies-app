import { icons } from "@/constants/icons";
import { FC } from "react";
import { Image, Text, TextInput } from "react-native";

const SearchBar: FC = () => {
  return (
    <Text className="items-center flex-row bg-green-600 rounded-full px-4 py-0">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor={"#AB8BFF"} />
      <TextInput
        className="flex-1 h-10 ml-2 text-white bg-red-600"
        placeholder="Search"
        // value=""
        // onPress={() => {}}
        // onChangeText={() => {}}
        placeholderTextColor={"#A8B5DB"}
      />
    </Text>
  );
};

export default SearchBar;
