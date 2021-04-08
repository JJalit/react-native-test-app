import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const IconText = ({ name, title, color = "#fff" }) => {
  return (
    <View style={styles.iconText}>
      <MaterialCommunityIcons
        name={name}
        color={color}
        size={25}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconText: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default IconText;
