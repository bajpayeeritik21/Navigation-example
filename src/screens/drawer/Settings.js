import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Settings ({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ flex: 0.1}}>Details</Text>
      <Text >{navigation.getParam('email') }</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:24
  }
});
