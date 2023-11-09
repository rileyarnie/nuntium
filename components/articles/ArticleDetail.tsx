import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArticleType } from "../../constants/articles";
import { COLORS } from "../../constants/colors";

type Props = {
  article: ArticleType;
  category: string;
};

const ArticleDetail = ({ article, category }: Props) => {
  //   console.log("article", article);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.articleContainer}
    >
      <Image
        style={styles.articleImage}
        source={{ uri: article.image_url }}
        alt={article.title}
      />
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{category}</Text>
        </View>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleContent}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({
  articleContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  articleImage: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 16,
    marginBottom: 24,
  },
  content: {},
  categoryContainer: {
    backgroundColor: COLORS.purplePrimary,
    borderRadius: 16,
    width: 100,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  category: {
    color: "white",
    textTransform: "capitalize",
    fontFamily: "SFProSemibold",
  },
  articleTitle: { fontSize: 20, fontFamily: "SFProBold", marginBottom: 24 },
  articleContent: {
    color: COLORS.grayDark,
    lineHeight: 24,
    fontSize: 16,
    textAlign: "justify",
  },
});
