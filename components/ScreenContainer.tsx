import { StyleSheet, View } from "react-native";
import React from "react";

type Props = { children: React.ReactNode };

const ScreenContainer = (props: Props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
});
