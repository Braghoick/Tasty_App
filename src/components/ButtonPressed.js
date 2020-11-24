import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import constants from "../utils/constants";

let iconName = "non-pressed";

const Pressing = () => {
  if (iconName == "non-pressed"){
    iconName = "pressed"
  } else if (iconName == "pressed"){
    iconName = "non-pressed"
  }
}

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={Pressing}>
        return (
          <FontAwesome
            name={iconName}
            size={16}
            color={constants.COLORS.WARNING}
          />
        );
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
  },
});

export default Button;
