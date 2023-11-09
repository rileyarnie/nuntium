import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ArticleDetail from "../../../../../../components/articles/ArticleDetail";
import { Articles } from "../../../../../../constants/articles";

type Props = {};

const ArticlePage = (props: Props) => {
  const params = useLocalSearchParams();
  const singleArticle = Articles.filter(
    (article) => article.id === params.id
  )[0];

  return (
    <View style={styles.container}>
      <ArticleDetail
        category={params.category as string}
        article={singleArticle}
      />
    </View>
  );
};

export default ArticlePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === "ios" ? 24 : 0,
  },
});
