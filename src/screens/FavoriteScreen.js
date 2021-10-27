import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Task from "../components/Task";
import { connect } from "react-redux";

const FavoriteScreen = ({ addToList, task, navigation }) => {
  return (
    <View>
      <Text>Fav Screen</Text>
      <TouchableOpacity onPress={() => addToList()}>
        <Task num={1} data={task} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToList()}>
        <Task num={2} data={task} />
      </TouchableOpacity>

      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const mapStateToProps = (state) => {
  if (state) {
    return { task: state.task };
  } else {
    return { task: "" };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: () => dispatch({ type: "add", payload: "test" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);

const styles = StyleSheet.create({});
