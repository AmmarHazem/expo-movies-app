import { images } from "@/constants/images";
import { FC } from "react";
import { Image, Text, ImageBackground, View } from "react-native";

const TabIcon: FC<TabIconProps> = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="h-14 w-16 justify-center items-center mt-4">
      <Image source={icon} tintColor={"#88B5BB"} className="size-5" />
    </View>
  );
};

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: any;
}

export default TabIcon;
