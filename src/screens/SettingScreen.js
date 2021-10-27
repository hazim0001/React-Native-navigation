import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
