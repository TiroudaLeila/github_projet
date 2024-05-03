import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const AccueilScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
            <Text style={{fontSize:20, color: '#fff'}}>Accueil</Text>
        </TouchableOpacity>
    </View>
  )
}
// const styles = StyleSheet.create({
//     button: {

//         alignItems: 'center',
//         backgroundColor: '#CF4C6C',
//         paddingHorizontal: 100,
//         paddingVertical: 10,
//         borderRadius: 20,
//         marginTop:20,
        
//     }
// })

export default AccueilScreen;