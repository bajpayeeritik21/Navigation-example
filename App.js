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

// import Tab1 from './src/screens/tabs/plant1';
// import Tab2 from './src/screens/tabs/plant2';
// import Tab3 from './src/screens/tabs/plant3';
import { Component } from 'react';
import { createAppContainer } from 'react-navigation';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
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

  
})
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
    Favorites:{
      screen:Favorites,
      navigationOptions:{
        title:'Favorites',
        headerStyle:{backgroundColor:'grey'}
      }
  }
      ,
    Setting:{screen:Settings  }
}
const AppStackNavigator = createStackNavigator(screens
);
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();


// createDrawer = () =>
// <Drawer.Navigator>
// <Drawer.Screen name="Home" children={this.createHomeStack} />
//   <Drawer.Screen name="Contacts" component={Contacts} />
//   <Drawer.Screen name="Favorites" component={Favorites} />
//   <Drawer.Screen name="Settings" component={Settings} />
// </Drawer.Navigator>
 
 
//  createHomeStack = () =>
//   <Stack.Navigator>
//     <Stack.Screen name="REGFORM" component={'regform.js'}
//         children={this.createDrawer} />
//     <Stack.Screen name="homescreen" component={'./src/screens/homescreen.js'}/>
//     <Stack.Screen name="about" component={'./src/screens/aboutscreen.js'}  />
    
//   </Stack.Navigator>

  //  createTopTabs = (props) => {
  //   return <MaterialTopTabs.Navigator>
  //     <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
  //     <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
  //     <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
  //   </MaterialTopTabs.Navigator>
  // }




 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60
  },
});
