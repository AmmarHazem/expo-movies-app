import { SWRConfig } from "swr";
import { Stack } from "expo-router";
import { AppState, AppStateStatus } from "react-native";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import "../global.css";

export default function RootLayout() {
  const [isConnected, setIsConnected] = useState(true);
  console.log("isConnected", isConnected);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isOnline() {
          return isConnected;
        },
        isVisible() {
          const value = AppState.currentState === "active";
          console.log("isVisible", value);
          return value;
        },
        initFocus(callback) {
          let appState = AppState.currentState;
          const onAppStateChange = (nextAppState: AppStateStatus) => {
            console.log("initFocus onAppStateChange", appState, nextAppState);
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
        initReconnect(callback) {
          const unsubscribe = NetInfo.addEventListener((state) => {
            console.log("initReconnect", state.isConnected);
            if (state.isConnected) {
              callback();
            }
          });
          return unsubscribe;
        },
      }}
    >
      <Stack>
        <Stack.Screen name="(home-tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: true }} />
      </Stack>
    </SWRConfig>
  );
}
