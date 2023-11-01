import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CategoryType } from "../constants/categories";
import { COLORS } from "../constants/colors";

type Props = { category: CategoryType };

const CategoryItem = ({ category }: Props) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    borderWidth: 0.6,
    borderColor: COLORS.grayLight,
    color: COLORS.grayDark,
    width: 160,
    height: 72,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    // flexBasis: "50%",
    // flexGrow: 1,
    // flexShrink: 0,
  },
  categoryTitle: {
    fontFamily: "SFProSemibold",
    fontSize: 16,
  },
});
