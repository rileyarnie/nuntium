import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ArticleType } from "../../constants/articles";
import BookmarksIcon from "../icons/BookmarksIcon";
import { COLORS } from "../../constants/colors";
import { useRouter } from "expo-router";

type Props = { article: Partial<ArticleType>; category: string };

const SingleArticle = ({ article, category }: Props) => {
  const router = useRouter();

  console.log("category", category);

  const handlePress = () => {};

  return (
    <Pressable
      style={styles.articleContainer}
      onPress={() =>
        router.push(`home/article/${category}/${article.id}`)
      }
    >
      <Image
        style={styles.articleImage}
        source={{ uri: article?.image_url }}
        alt=""
      />
      {/* <View
        style={{
          backgroundColor: "red",
          width: 24,
          height: 24,
          position: "absolute",
          right: 10,
          top: 10,
        }}
      >
        <BookmarksIcon color={COLORS.grayPrimary} />
      </View> */}
      <View style={styles.articleFooter}>
        <Text style={styles.articleTitle}>{article.title}</Text>
      </View>
    </Pressable>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({
  articleContainer: {
    borderRadius: 16,
    // height: 272,
    width: 336,
    marginHorizontal: "auto",
    overflow: "hidden",
    position: "relative",
    borderWidth: 1,
    borderColor: COLORS.grayLighter,
  },
  articleImage: {
    width: "100%",
    height: 192,
    objectFit: "cover",
  },
  articleFooter: {
    padding: 16,
  },
  articleTitle: {
    fontFamily: "SFProSemibold",
  },
});
