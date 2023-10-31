import { View, Text } from "react-native";
import React from "react";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const _layout = (props: Props) => {
  return (
    <ScreenContainer title="Profile" subtitle="">
      <Text>Profile Screen</Text>
    </ScreenContainer>
  );
};

export default _layout;
