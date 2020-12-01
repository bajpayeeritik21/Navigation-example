  
import React from 'react';
import { View, Text, Button } from 'react-native';



export default function Contacts(props){
  const pressHandler=()=>{
  props.navigation.navigate('Favorites')
  }
  return (
    <View>
      <Text>Contacts</Text>
      <Button title='Go to Favourites' onPress={pressHandler}/>
    </View>
  )
}
