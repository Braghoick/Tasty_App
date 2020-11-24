import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
  Image
} from "react-native";
import axios from "axios";
import constants from "../utils/constants";
import Recipe from "../components/recipes";

export const HomeScreen = ({navigation, route}) => {

    //console.log(navigation);

    const [recipes, setRecipes] = React.useState([]);

    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { from: "0", size: "200", tags: "under_30_minutes" },
      headers: {
        "x-rapidapi-key": `${constants.API_KEY}`,
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    };

    useEffect(() => {
      axios
        .request(options)
        .then(function (response) {
          setRecipes(response.data.results);
        console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [setRecipes]);

    return (
      <SafeAreaView style={styles.container}>
          <Image
            style={[styles.img]}
            source={{ uri: '../images/profile.jpg' }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hi Chef!!</Text>
          <Text style={styles.subtitle}>What do you want to cook?</Text>
        </View>
        <ScrollView style={styles.content}  stickyHeaderIndices={[0]}>
         <FlatList
            style={{ alignSelf: "center" }}
            numColumns={2} // set number of columns
            columnWrapperStyle={styles.row} // space them out evenly
            data={recipes}
            renderItem={({ item }) => (
              <Recipe item={item} navigation={navigation}/>
            )}
          keyExtractor={(item) => `${item.id}`}
          contentInset={{ bottom: 80, top: 0 }}
        /> 
        </ScrollView>
      </SafeAreaView>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.LIGHT_GRAY,
    marginTop: Platform.OS !== "ios" ? 0 : 0,
  },
  content: {
    flex: 1,
    backgroundColor: constants.COLORS.PRIMARY2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    marginLeft: 23,
  },
  titleContainer: {

  },
  subtitle: {
    fontSize: 12,
    marginLeft: 26,
    marginBottom: 60,
  },
  img: {
    height: 150,
    width:150,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  img: {},
});


