import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Articles } from "../../constants/articles";
import SingleArticle from "./SingleArticle";

type Props = {
  category: string;
};

const ArticlesList = ({ category }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Articles}
        renderItem={({ item }) => (
          <SingleArticle category={category} article={item} />
        )}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", gap: 24 }}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </View>
    // <ScrollView>
    //   {Articles.map((article) => (
    //     <SingleArticle key={article.id} article={article} />
    //   ))}
    // </ScrollView>
  );
};

export default ArticlesList;

const styles = StyleSheet.create({});
