import React, { Component } from 'react';
import { Button, View, Text ,Image} from 'react-native';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Image source ={require("../img/7.png")} />
          <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('about')}
          />
      </View>
    )
  }
}