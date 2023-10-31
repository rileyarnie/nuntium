import { View, Text } from "react-native";
import React, { useState } from "react";
import { Redirect } from "expo-router";

type Props = {};

const index = (props: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return <Redirect href="/auth/login" />;
};

export default index;
