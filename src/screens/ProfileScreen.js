import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FavoriteScreen from "./FavoriteScreen";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
