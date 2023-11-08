import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchIcon from "./icons/SearchIcon";
import { COLORS } from "../constants/colors";
import MicrophoneIcon from "./icons/MicrophoneIcon";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarInnerContainer}>
        <SearchIcon color={COLORS.grayPrimary} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <MicrophoneIcon color={COLORS.grayPrimary} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.grayLighter,
    borderRadius: 12,
    padding: 16,
  },
  searchBarInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "SFProSemibold",
    paddingLeft: 24,
  },
});
