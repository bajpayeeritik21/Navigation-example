  
import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Favorites(props){
  const pressHandler=()=>{
    props.navigation.navigate('Setting')
    }
  return(
    <View>
      <Text>Favorites</Text>
      <Button title='Go to Setting' onPress={pressHandler}/>
    </View>
  )
}