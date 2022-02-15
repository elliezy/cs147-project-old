import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import HomeProfile from "./HomeProfile";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeProfile" component={HomeProfile} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
