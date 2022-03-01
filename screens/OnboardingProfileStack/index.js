import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import OnboardingSwiper from "./OnboardingSwiper";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

const OnboardingProfileStack = () => {
  const [finishedOnboarding, setFinishedOnboarding] = useState(false);

  if (!finishedOnboarding) {
    return (
      <Stack.Navigator>
        {/* Onboarding Screens */}
        <Stack.Screen name="OnboardingSwiper">
          {(props) => (
            <OnboardingSwiper
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen>

        {/* <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo">
          {(props) => (
            <OnboardingTwo
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen> */}

        {/* Profile Screens */}
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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