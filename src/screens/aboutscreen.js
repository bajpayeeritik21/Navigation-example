import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState
} from '@react-navigation/native';

import { styles } from './styles/styles';

Detail = () => {

  const navigation = useNavigation();
  const route = useRoute();
  console.log(route)

  return (
    <View>
      <TouchableOpacity>
          <Text onPress={() => this.props.navigation.navigate('homescreen')}>Go to Home</Text>
        </TouchableOpacity>
    </View >
  );
}

export default Detail;
