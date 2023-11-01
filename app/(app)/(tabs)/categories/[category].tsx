import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const CategoryDetail = (props: Props) => {
  const params = useLocalSearchParams();
  const router = useRouter();

  console.log("params", params);

  return (
    <ScreenContainer
      title={`${params?.category}`}
      subtitle={`Here are some stories on ${params?.category}`}
    >
      <View>
        <Text>{params.category}</Text>
        <Link href="/categories">
          <Button onPress={() => router.back()} title="Go back" />
        </Link>
      </View>
    </ScreenContainer>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({});
