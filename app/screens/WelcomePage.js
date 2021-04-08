import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Button from "../components/Button";
import colors from "../config/colors";

const WelcomePage = () => {
  let [fontsLoaded] = useFonts({
    JalnanOTF: require("../assets/fonts/JalnanOTF.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.text}>SNS품앗이</Text>
          <Image style={styles.main} source={require("../assets/main.png")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="네이버 블로그 품앗이" color="naver" icon="blogger" />
          <Button
            title="인스타그램 품앗이"
            color="instagram"
            icon="instagram"
          />
          <Button title="유튜브 품앗이" color="youtube" icon="youtube" />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  logoContainer: { top: 80 },
  text: {
    fontFamily: "JalnanOTF",
    fontSize: 35,
    textAlign: "center",
    color: colors.primary,
  },
  main: {
    width: 330,
    height: 330,
    alignSelf: "flex-end",
    marginVertical: 40,
  },
  buttonContainer: {
    marginVertical: 40,
    padding: 20,
  },
});

export default WelcomePage;
