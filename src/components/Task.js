import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = ({ num, data }) => {
  return (
    <View>
      <Text>Task {num}</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
