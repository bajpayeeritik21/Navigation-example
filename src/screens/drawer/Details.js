import React from 'react';
import { View, Text } from 'react-native';

export default function Details ({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ flex: 0.1}}>Details</Text>
      <Text >{navigation.getParam('email') }</Text>
    </View>
  )
}