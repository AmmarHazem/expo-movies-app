import { SWRConfig } from "swr";
import { Stack } from "expo-router";
import "../global.css";
import { AppState, AppStateStatus } from "react-native";

export default function RootLayout() {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isOnline() {
          /* Customize the network state detector */
          return true;
        },
        isVisible() {
          /* Customize the visibility state detector */
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;
          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* If it's resuming from background or inactive mode to active one */
            if (appState.match(/inactive|background/) && nextAppState === "active") {
              callback();
            }
            appState = nextAppState;
          };
          // Subscribe to the app state change events
          const subscription = AppState.addEventListener("change", onAppStateChange);
          return () => {
            subscription.remove();
          };
        },
        // initReconnect(callback) {
        //   /* Register the listener with your state provider */
        // },
      }}
    >
      <Stack>
        <Stack.Screen name="(home-tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: true }} />
      </Stack>
    </SWRConfig>
  );
}
