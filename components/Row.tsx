import React from "react";
import { IMovie } from "../services/types";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",


  },
  button: {
    padding: 30,
    fontSize: 16,
    backgroundColor: "#660000",
    borderRadius: 8,
    marginTop: 15,
    opacity: 0.8,
  },
  text: {
    color: "#fff",
  },
});

const Row = (props: { item: IMovie, index: number }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>
      {props.index + 1}) {props.item.title}
    </Text>
  </TouchableOpacity>
);

export default Row;