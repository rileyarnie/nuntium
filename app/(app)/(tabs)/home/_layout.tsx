import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";
import { Link, Slot } from "expo-router";

type Props = {};

const _layout = (props: Props) => {
  return (
    <ScreenContainer title="Browse" subtitle="Discover things of this world">
      <Slot />
    </ScreenContainer>
  );
};

export default _layout;
