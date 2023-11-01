import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const NewPassword = (props: Props) => {
  return (
    <ScreenContainer
      title="Create New Password 🔒"
      subtitle="You can create a new password, please dont forget it too."
    >
      <Text>Forgot Password</Text>
    </ScreenContainer>
  );
};

export default NewPassword;

const styles = StyleSheet.create({});
