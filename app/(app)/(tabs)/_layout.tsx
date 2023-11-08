import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, Tabs } from "expo-router";
import { COLORS } from "../../../constants/colors";
import HomeIcon from "../../../components/icons/HomeIcon";
import CategoriesIcon from "../../../components/icons/CategoriesIcon";
import BookmarksIcon from "../../../components/icons/BookmarksIcon";
import ProfileIcon from "../../../components/icons/ProfileIcon";

type Props = {};

export default (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        // tabBarLabelStyle: { display: "none" },
        headerTitleStyle: { textTransform: "capitalize" },
        headerStyle: {
          shadowColor: "transparent",
        },
        tabBarActiveTintColor: COLORS.purplePrimary,
        tabBarShowLabel: false,
        // headerShown: false,
      }}
      initialRouteName="(app)"
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
