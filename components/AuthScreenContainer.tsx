import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

type Props = {};

const AuthScreenContainer = (props: Props) => {
  return (
    <View>
      <Text>AuthScreenContainer</Text>
    </View>
  );
};

export default AuthScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3fee44",
  },
  heading: {
    color: COLORS.blackPrimary,
    fontSize: 24,
    fontFamily: "SFProBold",
    marginBottom: 8,
  },
  subHeading: {
    color: COLORS.grayPrimary,
    fontSize: 16,
    fontFamily: "SFPro",
  },
});
