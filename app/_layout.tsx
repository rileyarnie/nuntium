import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, ErrorBoundary } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeIcon from "../components/icons/HomeIcon";
import CategoriesIcon from "../components/icons/CategoriesIcon";
import BookmarksIcon from "../components/icons/BookmarksIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import { COLORS } from "../constants/colors";

type Props = {};

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "home",
// };

const RootLayout = (props: Props) => {
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
