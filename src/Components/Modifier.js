import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Modifier = ({title ,onSubmit}) => {
  return (
    <View>
      <TouchableOpacity 
      style={styles.button}
      onPress={onSubmit}
       >
      <Text style={{fontSize:20, color: '#fff'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    button: {

        alignItems: 'center',
        backgroundColor: '#CF4C6C',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop:20,
        
    }
})

export default Modifier