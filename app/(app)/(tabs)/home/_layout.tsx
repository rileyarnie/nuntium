import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";
import { Link } from "expo-router";

type Props = {};

const _layout = (props: Props) => {
  return (
    <ScreenContainer title="Home" subtitle="Discover things of this world">
      <Text>Home Screen dd</Text>
      <View style={{ padding: 50 }}>
        <Link href="/auth/login" asChild>
          <Button title="Link to home page" />
        </Link>
      </View>
    </ScreenContainer>
  );
};

export default _layout;
