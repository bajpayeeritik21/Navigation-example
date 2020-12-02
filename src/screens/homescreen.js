  
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



export default function HomeScreen(props){
  const pressHandler=()=>{
  props.navigation.navigate('Favorites')
  }
  const names =[
    { name:"Cristiano", data:"He has won 30 major trophies in his career, including seven league titles, five UEFA Champions Leagues, one UEFA European Championship, and one UEFA Nations League title. ",key:"1"},
    { name:"Griezman", data:"Antoine Griezmann (French pronunciation: ​[ɑ̃twan ɡʁijɛzman]; born 21 March 1991) is a French professional footballer who plays as a forward for Spanish club Barcelona and the France national team.",key:"2"},
    { name:"Messi", data:"A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (448), a La Liga and European league season (50), most hat-tricks in La Liga (36) and the UEFA Champions League (8), and most assists in La Liga (183), a La Liga and European league season (21) and the Copa América (12).",key:"3"},
    { name:"Chhetri", data:"Popularly known as Captain Fantastic, having scored the second highest number of goals in international matches among active male players after Cristiano Ronaldo,[2][3] he is both the most-capped player[4] and all-time top goalscorer for the Indian national team, with 72 goals[5] in 115 appearances.[6",key:"4"}

  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contacts</Text>
      <FlatList
      data={names}
      renderItem={({item})=>(
     <TouchableOpacity onPress={()=>props.navigation.navigate('AboutUs',item)}><Text>{item.name}</Text></TouchableOpacity>    
      )}
      />
      <Button title='Go to Favorites'onPress={pressHandler}  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}/>
    </View>
  )
}
