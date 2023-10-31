import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "../../../../components/CategoryItem";
import ScreenContainer from "../../../../components/ScreenContainer";
import { Categories } from "../../../../constants/categories";

type Props = {};

const index = (props: Props) => {
  return (
    <ScreenContainer
      title="Categories"
      subtitle="Thousands of articles in each category"
    >
      {/* <View style={styles.categoriesContainer}>
        {Categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </View> */}
      <FlatList
        data={Categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={{
          gap: 16,
          alignItems: "center",
          // backgroundColor: "green",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "space-between",
          // height: "100%",
        }}
        columnWrapperStyle={{ gap: 16 }}
      />
    </ScreenContainer>
  );
};

export default index;

const styles = StyleSheet.create({
  categoriesContainer: {
    height: "100%",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    // alignContent: "center",
    // flexWrap: "wrap",
  },
});
