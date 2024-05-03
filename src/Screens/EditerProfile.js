import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import { imagesDataUrl } from '../Components/Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styless from './CreateNote/styles';
import Save from '../Components/Save';

const EditerProfileScreen = ({route ,navigation}) => {
  const [selectedImage, setSelectedImage]= useState(imagesDataUrl[0])
  const [name, setName] = useState(route.params.paramName);
  const [email, setEmail]= useState(route.params.paramEmail);
  const [password,setPassword]= useState(route.params. paramPassword);
  const {paramName , paramEmail, paramPassword} = route.params;


  const handleImageSeclection = () => {

  } 

  return (
    <SafeAreaView 
    style={{
      flex:1,
      borderBlockColor:'#fff'

    }}>
    <Header 
      title={'Edit Profile'}
      // rigthIcon={'delete-outline'}
        leftIcon={'arrow-left'} 
      // rigthIconAction={}
      leftIconAction={() => navigation.navigate('Home')}
      color={'white'}
    />
    <ScrollView>
      <View 
          style={{
            alignItems:'center',
            marginVertical:22,

      }}>
        <TouchableOpacity 
          onPress={handleImageSeclection}
          >
            <Image
            source= {{uri: selectedImage}}
            style={{
              width:170,
              height:170,
              borderRadius:85,
              borderWidth:2,
              borderColor:'#fff'
            }}
            />
            <View 
            style={{
              position:'absolute',
              bottom:0,
              right:10,
              zIndex:9999,

            }}>
              <MaterialIcons name="photo-camera" size={32} color={'#000'} />
            </View>
          </TouchableOpacity>
      </View>
        <View  
          style={{
              flexDirection:'column',
              marginBottom:6
        }}
        >
          <Text style={{fontSize:20,fontWeight:'300',color:'#000'}}>Name</Text>
          <View 
          style={{
            height:44,
            width:'100%',
            borderBlockColor:'secondary',
            borderWidth:1,
            borderRadius:4,
            marginVertical:7,
            justifyContent:'center',
            paddingLeft:8,
          }}
          >
            <TextInput
            value={name}
            onChangeText={value=> setName(value)}
            editable={true}
            />
          </View>
        </View>
        <View  
          style={{
              flexDirection:'column',
              marginBottom:6
        }}
        >
          <Text style={{fontSize:20,fontWeight:'300',color:'#000'}}>Email</Text>
          <View 
          style={{
            height:44,
            width:'100%',
            borderBlockColor:'secondary',
            borderWidth:1,
            borderRadius:4,
            marginVertical:7,
            justifyContent:'center',
            paddingLeft:8,
          }}
          >
            <TextInput
            value={email}
            onChangeText={value=> setEmail(value)}
            editable={true}
            />
          </View>
        </View>
        <View  
          style={{
              flexDirection:'column',
              marginBottom:6,
        }}
        >
          <Text style={{fontSize:20,fontWeight:'300',color:'#000',marginVertical:4}}>Password</Text>
          <View 
          style={{
            height:44,
            width:'100%',
            borderBlockColor:'secondary',
            borderWidth:1,
            borderRadius:4,
            marginVertical:7,
            justifyContent:'center',
            paddingLeft:10,
          }}
          >
            <TextInput
            value={password}
            onChangeText={value=> setPassword(value)}
            editable={true}
            secureTextEntry
            />
          </View>
        </View>
        <View  
        style={styless.save} onPress={() =>{
        navigation.navigate('EditerProfileScreen')
      }}>
        <Save
          title={'Save'} 
        />
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default EditerProfileScreen