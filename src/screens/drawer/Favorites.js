  
import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Favorites({navigation}){
  const pressHandler=()=>{
    navigation.navigate('Setting')
    }
  return(
    <View>
      <Text>Favorites</Text>
  <Text>here is{navigation.getParam('pupils')}</Text>
      <Button title='Go to Setting' onPress={pressHandler}/>
    </View>
  )
}