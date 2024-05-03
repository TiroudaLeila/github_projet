import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
   
  } from '@react-navigation/drawer';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';




const CustomDrawer = props => {
    const {navigation } = props;
    const handleDeconnexion = () =>{
            Alert.alert(
                'Déconnexion',
                'Voulez-vous vraiment vous déconnecter ?',
                [
                { text: 'Annuler', style: 'cancel' },
                { text: 'Déconnexion', onPress: () => deconnexionConfirmed() }
                ],
                { cancelable: false }
            );
            };
            deconnexionConfirmed = () => {
                navigation.navigate('Home');
            };

    const isFocused = (name) => {
        const focused = true;
        switch (props.state.routeNames[props.state.index]) {
            case name:
                return focused;
                break;
            default:
                return !focused;
                break;
        }
    }

  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:'#CF4C6C'}} 
    >
    <ImageBackground>
        <View>
        <Image
        source={{uri:'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',} }
        style={{height: 80, width: 80, borderRadius: 40, marginBottom:10}}
        />
        </View>
        <Text style={{color:'#fff', fontSize:18, fontWeight:'700',marginVertical:3, fontFamily:'Roboto-Medium'}}>Tirouda Leila</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000', fontSize:13, fontWeight:'400',marginVertical:3, fontFamily:'Roboto-Medium', marginRight:4}}>732 followers</Text>
            <Ionicons name="people-outline" size={20} color={'#000'} />
        </View>
    </ImageBackground>
    <View  style={{flex:1, backgroundColor:'#fff', paddingTop:10}}> 
        {/* <DrawerItemList {...props} /> */}
        <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
            style={[
                {
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                },
                isFocused('Home') && {
                    backgroundColor: "pink",
                    padding: 10,
                },
            ]}
        >
            <Icon name="home-outline" size={22} color={'#000'} />
            <Text 
                style={[{
                    marginLeft: 20,
                },
                    isFocused('Home') && {
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#FFF'
                },
            ]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Parametres')}
        activeOpacity={0.8}
        style={[{
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
            },
                isFocused('Parametres') && {
                    backgroundColor: "pink",
                    padding: 10,
                },
            ]}
            >
            <Ionicons name="settings" size={22} color={'#000'} />

            <Text 
            style={[{
                    marginLeft: 20,
                },
                    isFocused('Parametres') && {
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#FFF'
            },

            ]}>Parametres</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Profile')}
        activeOpacity={0.8}
        style={ [{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
        },
            isFocused('Profile') && {
                backgroundColor: "pink",
                padding: 10,
            },
                ]}
                >
                <Ionicons name="person-outline" size={22} color={'#000'} />
            <Text 
            style={[{
                marginLeft: 20,
            },
            isFocused('Profile') && {
                fontSize: 16,
                fontWeight: '700',
                color: '#FFF'
            },
            ]}>Profile</Text>
        </TouchableOpacity>
    </View>
    </DrawerContentScrollView>
    <TouchableOpacity 
            onPress={() => handleDeconnexion()}
    >
            <Text style={{
                alignItems: 'center',
                paddingHorizontal: 100,
                paddingVertical: 100,
                marginTop:20,}}>Deconexion</Text>
        </TouchableOpacity>
        </View>


)
}

export default CustomDrawer