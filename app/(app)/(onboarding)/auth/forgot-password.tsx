import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <ScreenContainer
      title="Forgot Password 🤔"
      subtitle="We need your email adress so we can send you the password reset code."
    >
      <Text>Forgot Password</Text>
    </ScreenContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
