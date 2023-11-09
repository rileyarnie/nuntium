import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar";
import { Link } from "expo-router";
import { Categories } from "../../../../constants/categories";
import CategoryItemPill from "../../../../components/CategoryItemPill";
import ArticlesList from "../../../../components/articles/ArticlesList";
import ScreenContainer from "../../../../components/ScreenContainer";

type Props = {};

const index = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("sports");

  const onPress = (name: string) => {
    setSelectedCategory(name.toLowerCase());
  };
  return (
    <ScreenContainer title="Browse" subtitle="Discover things of this world">
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.horizontalCaterogies}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Categories}
            renderItem={({ item }) => (
              <CategoryItemPill
                selectedCategory={selectedCategory}
                onPress={onPress}
                category={item}
              />
            )}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{
              gap: 16,
              marginTop: 24,
              maxHeight: 40,
            }}
            extraData={selectedCategory}
          />
        </View>
        <ArticlesList category={selectedCategory} />
        <View style={{ padding: 5 }}>
          <Link href="/auth/login" asChild>
            <Button title="Link to home page" />
          </Link>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  horizontalCaterogies: {
    marginBottom: 24,
  },
});
