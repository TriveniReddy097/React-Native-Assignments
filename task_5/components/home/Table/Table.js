import React from "react";
import { View, Text, Pressable } from "react-native";

const Row = ({ label, value, borderBottomWidth = 1 }) => {
  return (
    <View style={{ flexDirection: "row", borderBottomWidth }}>
      <Text style={{ flex: 1, padding: 5 }}>{label}</Text>
      <View style={{ width: 1, height: "100%", backgroundColor: "black" }} />
      <View style={{ flex: 1, padding: 5 }}>
        <Text>{value || "NA"}</Text>
      </View>
    </View>
  );
};

const Table = ({ post, onPress }) => {
  return (
    <View style={{ margin: 10, borderWidth: 1 }}>
      <Pressable onPress={onPress}>
        <Row label={"Title"} value={post.title} />
        <Row label={"URL"} value={post.url} />
        <Row label={"Created At"} value={post.created_at} />
        <Row label={"Author"} value={post.author} borderBottomWidth={0} />
      </Pressable>
    </View>
  );
};

export default Table;
