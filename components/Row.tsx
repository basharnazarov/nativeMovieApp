import React from "react";
import { IMovie } from "../services/types";
import { Pressable, Text } from "react-native";

const Row = (props: { item: IMovie, index: number }) => (
  <Pressable>
    <Text style={{ fontSize: 16, color: "#fff" }}>
      {props.index + 1}) {props.item.title}
    </Text>
  </Pressable>
);

export default Row;