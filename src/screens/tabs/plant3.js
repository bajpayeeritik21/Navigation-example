import React, { Component } from 'react';
import { Button, View, Text ,Image} from 'react-native';

export default class plant3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Plant 2</Text>
        <Image source ={require("../../img/plant3.jpg")} />
      </View>
    )
  }
}