import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import styless from '../CreateNote/styles';


const ProfileScreen =  ({
  props,
  navigation,
  name,
  email,
  password,


}) => {
  

  // const [nom, setNom] = useState('');
  // const [prenom, setPrenom] = useState('');
  // const [nomError, setNomError] = useState('');
  // const [prenomError, setPrenomError] = useState('');
  // const nomInputRef = useRef();
  // const prenomInputRef = useRef();
  return (
    <SafeAreaView style={styless.container}>
      <Header 
        title={''}
        // rigthIcon={'delete-outline'}
          leftIcon={'arrow-left'} 
        // rigthIconAction={}
        leftIconAction={() => navigation.goBack()}
        color={'white'}
      />
      <View style={{flex:1,alignItems:'center'}}>
        <Image 
              source={{uri:'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',} }
              style={{
                  height: 155,
                  width: 155,
                  borderRadius: 999,
                  borderWidth:2,
                  marginTop:-50
                }}
                  resizeMode='contain'
        />
        <Text style={{color:'#000', fontSize:20, fontWeight:'700',marginVertical:4, fontFamily:'Roboto-Medium'}}>Tirouda Leila</Text>
        <View 
        style={{
          paddingVertical:10,
          flexDirection:'row'
        }}
        
        >

        <View 
              style={{
                    flexDirection:'column',
                    alignItems:'center',
                    marginHorizontal:16,
                  
          }}>
          < Text style={{color:'primary', fontSize:14, fontWeight:'300', fontFamily:'Roboto-Medium'}}>732</Text>
            <Text style={{color:'secondary', fontSize:13, fontWeight:'300', fontFamily:'Roboto-Medium'}}>followers</Text>
              
      </View>
     
      <View 
          style={{
                flexDirection:'column',
                alignItems:'center',
                marginHorizontal:16
              }}>
                  < Text style={{color:'primary', fontSize:14, fontWeight:'300', fontFamily:'Roboto-Medium'}}>76</Text>
                  <Text style={{color:'secondary', fontSize:13, fontWeight:'300', fontFamily:'Roboto-Medium'}}>following</Text>
      </View>

      <View 
          style={{
            flexDirection:'column',
            alignItems:'center',
            marginHorizontal:16
            }}>
                < Text style={{color:'primary', fontSize:14, fontWeight:'300', fontFamily:'Roboto-Medium'}}>222K</Text>
                <Text style={{color:'secondary', fontSize:13, fontWeight:'300', fontFamily:'Roboto-Medium'}}>likes</Text>
              </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('EditerProfile',{
            paramName : name,
            paramEmail : email,
            paramPassword : password,

          })}
          style={{
            width: 124,
            height: 36,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: '#CF4C6C',
            marginHorizontal: 16,
            // borderWidth: 1,
            borderRadius: 10,
            }}
          >
            <Text 
                style={{
                    color:'#fff', 
                    fontSize:13,
                    fontWeight:'300', 
                    fontFamily:'Roboto-Medium'
            }}>Editer Profile</Text>

          </TouchableOpacity>
        </View>
        
      </View>
      
       </SafeAreaView>
         )
        }

      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styless.subContainer}>
          <View 
            style={[
              styless.inputsContainer, 
              prenomError && {borderColor: 'red'}
          ]}>
          {nomError? <Text style={{ color: 'red', }}>{nomError}</Text> : null}
            <Text style={{ fontSize: 18, fontWeight: '500', paddingStart: 15, paddingTop:15}}>Titre</Text>
            <TextInput
              ref={nomInputRef}
              style={styles.input}
              onChangeText={(text) => setNom(text)}
              value={nom}
              placeholder=''
            />
            <Text style={{ fontSize: 18, fontWeight: '500', paddingStart: 15, paddingTop:15}}>description</Text>
            <TextInput
              ref={prenomInputRef}
              style={styles.textarea}
              onChangeText={(text) => setPrenom(text)}
              value={prenom}
              placeholder=''
              multiline
            />
          </View>
          {prenomError && (
            <Text 
              style={{ 
                color: 'red', 
                marginBottom: 10,
                marginLeft: 3
              }}>
              {prenomError}
            </Text>
          )}
        </View>
      </ScrollView>
   

{/* const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderColor: '#000',
    padding: 10,
    width: '100%',
  },
  textarea: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
}); */}

export default ProfileScreen