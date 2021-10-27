import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginVertical: 20,
      }}
    >
      <TouchableOpacity onPress={() => props.increaseCounter()}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <Text>{props.counter}</Text>
      <TouchableOpacity onPress={() => props.decreaseCounter()}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  if (state) {
    return { counter: state.counter };
  } else {
    return { counter: 0 };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch({ type: "increase" }),
    decreaseCounter: () => dispatch({ type: "decrease" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({});
