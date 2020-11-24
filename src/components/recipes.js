import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { Card } from "react-native-elements";
import constants from "../utils/constants";

const recipe = ({ item, navigation }) => {
  //console.log(id);

  const {name, thumbnail_url} = item;

  const loadRecipe = () => {
      navigation.navigate(constants.SCREEN.DETAILS, {item});
  };

  return (
    <Pressable onPress={loadRecipe}>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Divider />
        <Card.Image style={styles.img} source={{ uri: thumbnail_url }} />
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginLeft: 23,
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 26,
  },
  titleContainer: {},
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default recipe;
