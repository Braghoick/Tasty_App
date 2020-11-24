import React from "react";
import { ScrollView, StyleSheet, Pressable, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import constants from "../utils/constants";

const { width, height } = Dimensions.get("screen");

const recipe = ({ item, navigation }) => {
  //console.log(id);

  const {name, thumbnail_url} = item;

  const loadRecipe = () => {
      navigation.navigate(constants.SCREEN.DETAILS, {item});
  };

  return (
      <Pressable onPress={loadRecipe}>
        <Card containerStyle={styles.card}>
          <Card.Image style={styles.img} source={{ uri: thumbnail_url }} />
          <Card.Title style={styles.title}>{name}</Card.Title>
        </Card>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: constants.COLORS.LIGHT,
    borderRadius: 20,
    width: 150,
    height: 230,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    marginTop: 5,
    fontSize: 15,
    alignItems: 'center',
    width: 130,
    height: 55,
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 26,
  },
  img:{
    width: 130,
    height: 130,
    borderRadius: 20,
  },
});

export default recipe;
