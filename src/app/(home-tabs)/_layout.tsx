import { icons } from '@/constants/icons'
import { Tabs } from 'expo-router'
import TabIcon from '@/src/component/TabIcon'

// https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg

export default function HomeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0F0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0F0D23',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: (props) => {
            return <TabIcon focused={props.focused} title="Home" icon={icons.home} />
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: (props) => {
            return <TabIcon focused={props.focused} title="Search" icon={icons.search} />
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: (props) => {
            return <TabIcon focused={props.focused} title="Saved" icon={icons.save} />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: (props) => {
            return <TabIcon focused={props.focused} title="Profile" icon={icons.person} />
          },
        }}
      />
    </Tabs>
  )
}
