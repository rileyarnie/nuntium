import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";
import { Link, Slot, Stack, useRouter } from "expo-router";
import BookmarksIcon from "../../../../components/icons/BookmarksIcon";
import { COLORS } from "../../../../constants/colors";
import LeftIcon from "../../../../components/icons/LeftIcon";

type Props = {};

const HearderLeft = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()}>
      <LeftIcon color={COLORS.grayPrimary} />
    </Pressable>
  );
};

const _layout = (props: Props) => {
  return (
    // <ScreenContainer title="Browse" subtitle="Discover things of this world">
    // </ScreenContainer>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="article/[category]/[id]"
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => <HearderLeft />,
          headerRight: () => <BookmarksIcon color={COLORS.grayPrimary} />,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
