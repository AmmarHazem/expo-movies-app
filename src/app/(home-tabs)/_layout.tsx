import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { ImageBackground, Image, Text } from "react-native";

// https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg

export default function HomeTabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => {
            return (
              <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image src={icons.home} tintColor={"#151312"} className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">Home</Text>
              </ImageBackground>
            );
          },
        }}
      />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
