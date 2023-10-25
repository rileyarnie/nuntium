import { View, Text } from "react-native";
import React from "react";
import ScreenContainer from "../../components/ScreenContainer";

type Props = {};

const _layout = (props: Props) => {
  return (
    <ScreenContainer
      title="Categories"
      subtitle="Thousands of articles in each category"
    >
      <Text>Categories Screen</Text>
    </ScreenContainer>
  );
};

export default _layout;
