import { View, Text } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";
import { Stack, Slot } from "expo-router";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Stack
      screenOptions={{ headerShadowVisible: false, headerTitle: "" }}
    ></Stack>
  );
};

export default _layout;
