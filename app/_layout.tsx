import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Tabs, ErrorBoundary, SplashScreen } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeIcon from "../components/icons/HomeIcon";
import CategoriesIcon from "../components/icons/CategoriesIcon";
import BookmarksIcon from "../components/icons/BookmarksIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import { COLORS } from "../constants/colors";
import { useFonts } from "expo-font";

export const unstable_settings = {
  initialRouteName: "home",
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
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
    <Tabs
      screenOptions={{
        // tabBarLabelStyle: { display: "none" },
        headerTitleStyle: { textTransform: "capitalize" },
        headerStyle: {
          shadowColor: "transparent",
        },
        tabBarActiveTintColor: COLORS.purplePrimary,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color }) => <CategoriesIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color }) => <BookmarksIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ff3f",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
