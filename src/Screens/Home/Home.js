import { View, Text, StatusBar, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../Components/Header/Header';
import AddButton from '../../Components/Header/AddButton';
import MesNote from '../../Components/MesNotes/MesNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

// let DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//     description:
//       'It is a long established fact that a reader will be distracted by the readable content',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//     description: 'It is a long established fact that',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//     description:
//       'It is a long established fact that a reader will be distracted by the readable content',
//   },
// ];

// const sendMessage = () => {
//   if(DATA == 0){
//     <Text 
//     style={{
//         fontSize:14,
//         fontWeight: '400',
//         color: '#000',
//         textAlign: 'center',}}>Veuillez enregistrer une nouvelle note en cliquant sur le bouton plus en bas  </Text>

//   }

// }

const Home = ({navigation}) => {
  
  const [filtreDataId, setFiltreDataId] = useState([]);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    getNotes();
    // loadNote();
  }, []);

  const setNewDataId = (newDataId) => {
    setFiltreDataId(newDataId);
  }

  const deleteNote = async () => {
    const filtreData = data.filter(item => !filtreDataId.includes(item.id));
    try {
        await AsyncStorage.setItem("notes", JSON.stringify(filtreData)); 
        setData(filtreData); 
    } catch (error) {
      // Error saving data
      console.log(error);
      alert('Erreur lors de la suppression !')
    }
  }

  const getNotes = async () => {
    try {
      const value = await AsyncStorage.getItem('notes');
      // console.log(value);
      if (value !== null) {
        const valueParse = JSON.parse(value);
        console.log(valueParse);
        setData(valueParse)
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  // const loadNote = async () => {
  //   try {
  //     // Récupérer la note depuis AsyncStorage en utilisant son ID
  //     const savedNote = await AsyncStorage.getItem('notes');
  //     if (savedNote !== null) {
  //       const savedNoteParse = JSON.parse(savedNote);
  //       // Mettre à jour l'état avec la note existante
  //       setData(savedNoteParse);
  //     }
  //   } catch (error) {
  //     console.error('Error loading note:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#CF4C6C'}/>
        <Header 
          title={'Notes'}
          rigthIcon={'delete-outline'}
          leftIcon={'menu'} 
          rigthIconAction={deleteNote}
          // leftIconAction={deleteNote}
          color={'white'}
        />
      <Text style={{fontSize:30,textAlign:'center', color:'#000', marginTop:10}}>Toutes Mes Notes</Text>

      {filtreDataId.length > 0 && (
        <Text style={{
          fontSize: 14,
          fontWeight: '400',
          color: 'red',
          textAlign: 'center',
        }}>{filtreDataId.length} note(s) sélectionnée(s)</Text>
      )}
      
        <MesNote DATA={data} setNewDataId={setNewDataId} navigation={navigation}/> 
      <TouchableOpacity style={styles.addButton} onPress={() =>{
        navigation.navigate('CreateNoteScreen')
      }}>
        <AddButton/>
      </TouchableOpacity>
    </View>
    
  )
}

export default Home