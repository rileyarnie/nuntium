import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

export default (props: Props) => {
  return (
    <Stack
      screenOptions={{ headerShadowVisible: false, headerTitle: "" }}
    ></Stack>
  );
};

const styles = StyleSheet.create({});
