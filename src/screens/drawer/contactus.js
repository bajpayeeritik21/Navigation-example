import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
 
export default class Contacts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson.data
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    renderItem = (item) => {
      return <TouchableOpacity onPress={()=>this.props.navigation.navigate('Settings',item)}><Text style={styles.text} >{item.first_name} {item.last_name}</Text></TouchableOpacity>;
    }
 
    render(){
     return(
      <View style={{padding:10}}>
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => this.renderItem(item)   }    
       />
      
     </View>
     )}
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