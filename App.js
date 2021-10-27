import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  // return state;
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };
    case "decrease":
      return { counter: state.counter - 1 };
    default:
      state;
  }
};

const counterStore = createStore(counterReducer);

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={counterStore}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ animation: "fade" }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Favorite" component={FavoriteScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
