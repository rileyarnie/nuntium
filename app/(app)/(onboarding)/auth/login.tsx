import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const Login = (props: Props) => {
  return (
    <ScreenContainer
      title="Welcome Back 👋"
      subtitle="I am happy to see you again. You can continue where you left off by logging in"
    >
      <Link href="/home" asChild>
        <Button title="Link to home page" />
      </Link>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
