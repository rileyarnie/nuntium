import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  return <Redirect href="/login" />;
};

export default Page;

const styles = StyleSheet.create({});
