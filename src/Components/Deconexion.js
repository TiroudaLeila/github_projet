import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Deconexion = ({title,onSubmit}) => {
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
        alignContent: 'flex-start',
        backgroundColor: '#CF4C6C',
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderRadius: 100,
        marginTop:20,
        width:150,
        marginLeft:10

    
        // elevation:4
        
    }
})

export default Deconexion