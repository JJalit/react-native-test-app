import React from "react";
import Constants from "expo-constants";
import { View, SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ childern, style }) => {
  return (
    <SafeAreaView style={(styles.screen, style)}>
      <View style={(styles.view, style)}>{childern}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default Screen;
