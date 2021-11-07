import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TwitterScreen from './screens/tt';
import WhatsappScreen from './screens/wh';

export default function App() {
  return (
   
       <AppContainer/>
 
  );
}

const TabNavigator = createBottomTabNavigator({
  Whatsapp : {screen : WhatsappScreen},
  Twitter : {screen : TwitterScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
