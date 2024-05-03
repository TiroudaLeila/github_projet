import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import stylesss from './stylesss';
import Header from '../../Components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


const SignUp = ({navigation}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState(null)
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();


    // await AsyncStorage.setItem('token',username)
        // if (username === 'leila' && password === '123456') {
        //     navigation.navigate('HomeScreen')
            
        // } else{
        //     console.log('pas tres nice');
        //     alert('veuillez reenseigner les champs!')
        // }

        AsyncStorage.setItem('token','votreToken');
        AsyncStorage.setItem('UserId','votreId');
        AsyncStorage.setItem('password','votrePassword');
        useEffect(() => {
            getAuthData();
          }, []);
        

    const getAuthData = async() => {
        try {
            const token = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');
            const password = await AsyncStorage.getItem('password');
            if (token !== null && userId !== null && password !== null) {
                return{ token, userId, password};
                
            } else {
                return null;
                
            }
            
        } catch (error) {
            console.log(error);
            return null;
            
        }
        
    }
    const getData = async () => {
            const authData = await  AsyncStorage.getAuthDa();
            if (authData !== null) {
                console.log(authData.token);
                console.log(authData.userId);
                console.log(authData.password);
                
            } else {
                console.log("aucune données d'authentification trouvée");
            }

}
   

    // const tokenLogin = async() => {
    //     const value = await AsyncStorage.getItem('token')
    //     if (value !== null) {
    //         navigation.navigate('HomeScreen')
    //         console.log('Tu es connecté')
    //         } else{

    //             console.log('Tu dois te connecter');
    //         }
    // }
    // tokenLogin()



    // const getAuthData = async () => {
    //     try {
    //         const
            
    //     } catch (error) {
            
    //     }

    // }

  return (
    <ScrollView style={stylesss.container}>
         <View style={{flex:1,}} >
                <Image 
                source={{uri:'https://previews.123rf.com/images/valentint/valentint1611/valentint161104880/66181870-connexion-ic%C3%B4ne-connexion-bouton-site-web-sur-fond-blanc.jpg'}}
                style={{
                    height: 150,
                    width: 150,
                    borderRadius: 999,
                    borderWidth:2,
                    marginTop:10,
                    justifyContent:'center',
                    paddingVertical:10,
                    marginHorizontal:100,
                }}
                
                />
            </View>
        <View style={style.root}>
            <View style={style.title }>
            <Text style={style.title_text}>Sign</Text>
            <Text style={style.title_colored}>Up</Text>
            </View>
        <View>
            <Text style={{fontSize:16,color:'#000',padding:4}}>Name</Text>
            <View style={style.input_container}>
                <TextInput 
                ref={usernameInputRef}
                placeholder='Votre Name'
                onChangeText={(text) => setUsername(text)}
                value={username}
                />
            </View>
            <Text style={{fontSize:16,color:'#000',padding:4}}> Passwoard</Text>
            <View style={style.input_container}>
                <TextInput 
                ref={passwordInputRef}
                placeholder='Votre Password'
                onChangeText={(number) =>setPassword(number)}
                value={password}
                secureTextEntry
                />
            </View>
        </View>
        <TouchableOpacity 
        onPress={ getAuthData}
        activeOpacity={0.8}
        style={{
            alignItems: 'center',
            backgroundColor: 'pink',
            paddingHorizontal: 100,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop:30,
        }}
        >
            <Text style={{fontSize:16,color:'#fff'}}> Se Connecter</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        
  )
}
const style=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#FFF',
        justifyContent:'center',
        // alignItems:'center',
        paddingHorizontal: 30,
        

    },
    input_container:{
        borderWidth:1,
        borderColor:'pink',
        paddingHorizontal:9,
        paddingVertical:9,
        borderBlockColor:'#fff',
        borderRadius:5,
        marginBottom:10,
        marginTop:10,

    },
    input:{
        padding:10
    },
    title:{
        flexDirection:'row',

    },
    title_text:{
        fontSize:22,
        textAlign:'center',
    },
    title_colored:{
       color:'violet' 
    }

})



export default SignUp