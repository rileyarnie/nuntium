import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Tabs, ErrorBoundary, SplashScreen, Slot } from "expo-router";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const unstable_settings = {
  initialRouteName: "home",
};

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default () => {
  const [loaded, error] = useFonts({
    SFProBold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFPro: require("../assets/fonts/SF-Pro-Text-Regular.otf"),
    SFProLight: require("../assets/fonts/SF-Pro-Text-Light.otf"),
    SFProSemibold: require("../assets/fonts/SF-Pro-Text-Semibold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};
