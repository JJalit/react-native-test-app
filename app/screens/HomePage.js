import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import * as Progress from "react-native-progress";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "../components/List";

const HomePage = () => {
  let [fontsLoaded] = useFonts({
    JalnanOTF: require("../assets/fonts/JalnanOTF.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.media}>Instagram</Text>
          <View style={styles.coinContainer}>
            <MaterialCommunityIcons
              name="alpha-c-circle-outline"
              size={28}
              color="rgb(255, 215, 0)"
              style={styles.coinImg}
            />
            <Text style={styles.coinText}>123</Text>
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: colors.primary,
            marginBottom: 5,
          }}
        />
        <Progress.Bar progress={0.3} width={null} color={colors.primary} />
        <ListItem />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  media: {
    fontSize: 30,
    fontFamily: "JalnanOTF",
    marginLeft: 10,
    color: colors.primary,
  },
  coinContainer: {
    flexDirection: "row",
    top: 20,
    right: 10,
  },
  coinText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.medium,
  },
});
export default HomePage;
