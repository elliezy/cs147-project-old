import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";
import OnboardingSwiper from "./OnboardingSwiper";
import OnboardingOne from "./OnboardingOne";

const Stack = createStackNavigator();

const OnboardingProfileStack = () => {
  const [finishedOnboarding, setFinishedOnboarding] = useState(false);

  // Onboarding Screens
  if (!finishedOnboarding) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="OnboardingSwiper" component={OnboardingSwiper} />
        <Stack.Screen name="OnboardingOne">
          {(props) => (
            <OnboardingOne
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  // Profile Screens
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingProfileStack;

const styles = StyleSheet.create({});