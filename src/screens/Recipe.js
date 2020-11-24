import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import constants from "../utils/constants";
import Stars from "../components/Start";
import Steps from "../components/steps";
import Ingredients from "../components/ingredients";

const { width, height } = Dimensions.get("screen");
const imageWidth = 130;
const imageMargin = imageWidth + 25;
const imageHeight = 200;

export const Recipe = ({ navigation, route }) => {
  const { item } = route.params;
  let array = item.instructions;
  //console.log(item);
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0, 1]}>
      <View style={styles.imageContainer}>
        <Image
          style={[StyleSheet.absoluteFill, styles.cover]}
          blurRadius={1}
          source={{
            uri: `${item.thumbnail_url}`,
          }}
        ></Image>
        <View style={styles.backdrop} />
      </View>
      <View style={styles.content}>
        <View style={{ flex: 1, marginLeft: imageMargin }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> {item.name} </Text>
          </View>
          <Text style={styles.release_date}> {item.total_time_minutes} </Text>

          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Stars
              realVotes={
                item.user_ratings ? Math.floor(item.user_ratings.score) : 0
              }
            />
            <Text style={styles.votes}>
              {" "}
              {item.user_ratings ? Math.floor(item.user_ratings.score) : 0}{" "}
            </Text>
          </View>
        </View>

        {/* DESCRIPCION */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.paragraph}>
              {item.description ? item.description : "No description available"}
            </Text>
          </View>
        </View>

        {/* Ingredientes */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Ingredients</Text>
            <Ingredients item={item} />
          </View>
        </View>

        {/* PASOS */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Steps</Text>
            <Steps item={item} />
          </View>
        </View>

      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.LIGHT,
  },
  imageContainer: {
    position: "relative",
    width,
    height: height / 3,
  },
  cover: {
    width: null,
    height: null,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: constants.COLORS.WARNING,
    opacity: 0.3,
    zIndex: 9,
  },
  content: {
    position: "relative",
    width,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: constants.COLORS.LIGHT,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    top: -30,
    zIndex: 9,
  },
  contentSecondary: {
    position: "relative",
    width,
    paddingHorizontal: 30,
    backgroundColor: constants.COLORS.LIGHT,
    top: 50,
    zIndex: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: 10,
  },
  title: {
    color: constants.COLORS.TEXT_COLOR,
    fontWeight: "bold",
    flexGrow: 1,
    flexWrap: "wrap",
    marginRight: 20,
    fontSize: 16,
  },
  votes: {
    color: constants.COLORS.WARNING,
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 8,
  },
  popularity: {
    borderColor: constants.COLORS.PRIMARY,
    borderWidth: 1,
    width: 40,
    borderRadius: 4,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "300",
  },
  release_date: {
    fontSize: 12,
    textTransform: "capitalize",
    paddingBottom: 10,
  },
  poster: {
    position: "absolute",
    width: imageWidth,
    height: imageHeight,
    borderRadius: 16,
    top: -50,
    left: 20,
  },
  secondaryContent: {
    marginTop: 20,
  },
  paragraph: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "300",
    color: constants.COLORS.GRAY,
    lineHeight: 22,
  },
  containerButtonIcon: {
    backgroundColor: constants.COLORS.PRIMARY2,
    marginTop: 25,
    borderRadius: 20,
    width: 36,
    height: 36,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
