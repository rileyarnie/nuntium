import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const VerifyCode = (props: Props) => {
  return (
    <ScreenContainer
      title="Verification Code ✅"
      subtitle="You need to enter 4-digit code we send to your email adress."
    >
      <Text>Verify Code</Text>
    </ScreenContainer>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({});
