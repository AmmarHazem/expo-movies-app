import { icons } from "@/constants/icons";
import { FC } from "react";
import { Image, Text } from "react-native";

const SearchBar: FC = () => {
  return (
    <Text className="flex-row items-center bg-dark-200 rounded-full px-4 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor={"#AB8BFF"} />
    </Text>
  );
};

export default SearchBar;
