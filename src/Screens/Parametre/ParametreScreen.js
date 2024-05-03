import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Components/Header/Header'

const ParametreScreen = ({navigation}) => {
  return (
    <View>
     <Header 
        title={'Parametres'}
        // rigthIcon={'delete-outline'}
          leftIcon={'arrow-left'} 
        // rigthIconAction={}
        leftIconAction={() => navigation.goBack()}
        color={'white'}
      />
    </View>
  )
}

export default ParametreScreen