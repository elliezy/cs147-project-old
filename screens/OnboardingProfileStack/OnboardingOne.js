import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Onboarding from 'react-native-onboarding-swiper';

const OneboardingOne = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("OnboardingTwo")}
      />
    </View>
  );
};

export default OneboardingOne;

const styles = StyleSheet.create({});