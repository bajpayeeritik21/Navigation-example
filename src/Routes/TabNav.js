import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import plant1 from '../screens/tabs/plant1';
import plant2 from '../screens/drawer/Favorites';
import plant3 from '../screens/drawer/Settings';
import Nav from './StackNav'


const screens={
    Tab1:{
      screen:plant1,
      navigationOptions:{
        title:'HomeScreen',
        headerStyle:{backgroundColor:'grey'}
      }
    }
      ,
      Tab2:{
        screen:plant2,
        navigationOptions:{
          title:'Player-Info',
          headerStyle:{backgroundColor:'grey'}
        }
    },
    Tab3:{
        screen:plant3,
        navigationOptions:{
          title:'Settings',
          headerStyle:{backgroundColor:'grey'}
        }
    }
  };


  
  const DrawerNav=createBottomTabNavigator(screens);
  export default createAppContainer(DrawerNav);