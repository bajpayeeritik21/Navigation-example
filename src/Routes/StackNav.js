import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AboutUs from '../screens/aboutscreen';
import HomeScreen from '../screens/homescreen';
import Settings from '../screens/drawer/Settings';
import Contacts from '../screens/drawer/contactus';
const screens={
    HomeScreen:{
      screen:HomeScreen,
      navigationOptions:{
        title:'HomeScreen',
        headerStyle:{backgroundColor:'grey'}
      }
    }
      ,
      AboutUs:{
        screen:AboutUs,
        navigationOptions:{
          title:'Player-Info',
          headerStyle:{backgroundColor:'grey'}
        }
    },
    Contacs:{
      screen:Contacts,
      navigationOptions:{
        title:'Contacts',
        headerStyle:{backgroundColor:'grey'}
      }
  },
    Settings:{
        screen:Settings,
        navigationOptions:{
          title:'Settings',
          headerStyle:{backgroundColor:'grey'}
        }
    }
  }

  const StackNav=createStackNavigator(screens);
  export default createAppContainer(StackNav);