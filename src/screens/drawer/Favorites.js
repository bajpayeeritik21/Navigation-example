  
import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Favorites({navigation}){
  const pressHandler=()=>{
    navigation.navigate('Setting')
    }
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ flex: 0.1}}>Favorites</Text>
  <Text >{navigation.getParam('data') }</Text>
      <Button title='Go to Setting' onPress={pressHandler}/>
    </View>
  )
}
