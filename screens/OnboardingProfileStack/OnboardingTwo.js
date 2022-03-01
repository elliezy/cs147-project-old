import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OneboardingTwo = ({ setFinishedOnboarding }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>OneboardingTwo</Text>
      {/* Set finished onboarding to true and navigate to the first actual home screen */}
      <Button
        title="Finish Onboarding"
        onPress={() => {
          setFinishedOnboarding(true);
          navigation.navigate("FirstHomeScreen");
        }}
      />
    </View>
  );
};

export default OneboardingTwo;

const styles = StyleSheet.create({});