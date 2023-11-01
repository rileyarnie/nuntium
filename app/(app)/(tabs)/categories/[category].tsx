import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const CategoryDetail = (props: Props) => {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>{params.category}</Text>
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({});
