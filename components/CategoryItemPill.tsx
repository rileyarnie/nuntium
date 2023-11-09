import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CategoryType } from "../constants/categories";
import { COLORS } from "../constants/colors";

type Props = {
  category: CategoryType;
  onPress: (index: string) => void;
  selectedCategory: string;
};

const CategoryItemPill = ({ category, onPress, selectedCategory }: Props) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          onPress(category.title);
        }}
        style={[
          styles.categoryItem,
          {
            backgroundColor:
              category.title.toLowerCase() === selectedCategory
                ? COLORS.purplePrimary
                : COLORS.grayLighter,
          },
        ]}
      >
        <Text
          style={[
            styles.categoryTitle,
            {
              color:
                selectedCategory === category.title.toLowerCase()
                  ? "white"
                  : COLORS.grayPrimary,
            },
          ]}
        >{`${category.title}`}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryItemPill;

const styles = StyleSheet.create({
  categoryItem: {
    borderWidth: 0.6,
    borderColor: COLORS.grayLight,
    color: COLORS.grayDark,
    width: "auto",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryTitle: {
    fontFamily: "SFProSemibold",
    fontSize: 12,
  },
});
