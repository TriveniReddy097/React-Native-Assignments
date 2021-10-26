import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Raw JSON of selected table</Text>
      <Text>{JSON.stringify(item, null, 4)}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 30,
  },
});
