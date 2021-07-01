import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './Screens/Homescreen'
import Locationscreen from './Screens/Locationscreen'
import Meteorscreen from './Screens/Meteorscreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Home" 
      screenOptions = {{headerShown:false}}>
        <stack.Screen name = "Home" component = {Homescreen}/>
        <stack.Screen name = "Loacation" component = {Locationscreen}/>
        <stack.Screen name = "Meteor" component = {Meteorscreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
