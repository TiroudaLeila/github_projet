import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddButton = () => {
  
  return (
    <View style={{
    }}>
      <Icon name='add-circle' size={80} color='#CF4C6C' style={{elevation: 4, borderRadius: 100}}/>
    </View>
  )
}

export default AddButton