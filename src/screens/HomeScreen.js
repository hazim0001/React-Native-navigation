import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Counter from "../components/Counter";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeSreen</Text>

      <Counter />

      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
