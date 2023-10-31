import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

type Props = { children: React.ReactNode; title: string; subtitle: string };

const ScreenContainer = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subtitle}</Text>
      </View>
      <View>{props.children}</View>
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: { marginBottom: 32 },
  title: {
    color: COLORS.blackPrimary,
    fontSize: 24,
    fontFamily: "SFProBold",
    marginBottom: 8,
  },
  subTitle: {
    color: COLORS.grayPrimary,
    fontSize: 16,
    fontFamily: "SFPro",
  },
});
