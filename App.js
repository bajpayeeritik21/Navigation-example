import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Contacts from './src/screens/drawer/contactus';
import Favorites from './src/screens/drawer/Favorites';
import Nav from './src/Routes/StackNav'

import AboutUs from './src/screens/aboutscreen';
import HomeScreen from './src/screens/homescreen';
import Settings from './src/screens/drawer/Settings';
import TabNav from './src/Routes/TabNav'

import { Component } from 'react';
import { createAppContainer } from 'react-navigation';

 
export default class App extends Component {
    
  render(){
    const pupils=[
      {key:1,name:"karan",DOB:"26-06"},
      {key:2,name:"rahul",DOB:"23-09"},
      {key:3,name:"rituraj",DOB:"25-03"  }
    ];
  const Navigator=createAppContainer(DrawerNav);
  return(
    <Navigator />
  )
  }
}
const DrawerNav=createDrawerNavigator({
  Home:{
    screen:Nav
  },
  ContacUs:{
    screen:Contacts,
  },
  Favorites:{
    screen:Favorites,
  },
  Settings:{
    screen:Settings,
  },
  Plants:{
    screen:TabNav,
  }
});



 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60
  },
});
