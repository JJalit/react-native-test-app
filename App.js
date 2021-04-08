import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomePage from "./app/screens/HomePage";
import WelcomePage from "./app/screens/WelcomePage";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <View>
      <HomePage />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}
