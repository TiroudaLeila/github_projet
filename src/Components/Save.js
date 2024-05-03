import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Save = ({title}) => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.button}  
        // onPress={onSubmit}
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
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop:20,
        
    }
})

export default Save