import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {}

const Register = (props: Props) => {
  return (
    <ScreenContainer
      title="Welcome to Nuntium 👋"
      subtitle="Hello, I guess you are new around here. You can start using the application after sign up."
    >
      <Text>Sign Up</Text>
    </ScreenContainer>
  );
}

export default Register

const styles = StyleSheet.create({})