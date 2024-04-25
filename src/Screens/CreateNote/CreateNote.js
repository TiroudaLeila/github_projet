import { View, Text,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header/Header';
import Sauvegarde from '../../Components/Sauvegarde';
import styless from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const CreateNote = ({navigation}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();


  const handleSubmit = async () => {
    if (title.trim() === '') {
      setTitleError('Veuillez saisir une valeur');
      setDescriptionError('');
      titleInputRef.current.focus();
      titleInputRef.current.setNativeProps({ style: { borderBottomWidth: 2, borderColor: '#CF4C6C'} });
    } 
    else if (description.trim() === '')  {
      titleInputRef.current.setNativeProps({ style: { borderBottomWidth: 2, borderColor: '#000' } })
      setTitleError('');
      setDescriptionError('Veuillez saisir une valeur');
      descriptionInputRef.current.focus();
    }
    else{
      titleInputRef.current.setNativeProps({ style: { borderBottomWidth: 2, borderColor: '#000' } })
      setTitleError('');
      setDescriptionError('');
    const oneNote = {
      id: uuid.v4(),
      title: title,
      description: description
    };

    try {
      const mesNotesJson = await AsyncStorage.getItem('notes');
      if (mesNotesJson !== null) {
        const mesNotes = JSON.parse(mesNotesJson);
        await AsyncStorage.setItem("notes", JSON.stringify([...mesNotes, oneNote]));  
      } else {
        await AsyncStorage.setItem("notes", JSON.stringify([oneNote]));  
      }
      navigation.replace('HomeScreen');
    } catch (error) {
      // Error saving data
      console.log(error);
      alert('Erreur lors de la sauvegarde !')
    }
  }
}

  return (
    <SafeAreaView style={styless.container}>
      <Header 
        title={'Nouvelles Notes'}
        // rigthIcon={'delete-outline'}
          leftIcon={'arrow-left'} 
        // rigthIconAction={}
        // leftIconAction={}
        color={'white'}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styless.subContainer}>
          <View 
            style={[
              styless.inputsContainer, 
              descriptionError && {borderColor: 'red'}
          ]}>
          {titleError? <Text style={{ color: 'red', }}>{titleError}</Text> : null}
            <Text style={{ fontSize: 18, fontWeight: '500', paddingStart: 15, paddingTop:15}}>Titre</Text>
            <TextInput
              ref={titleInputRef}
              style={styles.input}
              onChangeText={(text) => setTitle(text)}
              value={title}
              placeholder=''
            />
            <Text style={{ fontSize: 18, fontWeight: '500', paddingStart: 15, paddingTop:15}}>description</Text>
            <TextInput
              ref={descriptionInputRef}
              style={styles.textarea}
              onChangeText={(text) => setDescription(text)}
              value={description}
              placeholder=''
              multiline
            />
          </View>
          {descriptionError && (
            <Text 
              style={{ 
                color: 'red', 
                marginBottom: 10,
                marginLeft: 3
              }}>
              {descriptionError}
            </Text>
          )}
          <View style={styless.sauvegarder} onPress={() =>{
            navigation.navigate('CreateNoteScreen')
          }}>
            <Sauvegarde
              title={'Sauvegarder'}
              onSubmit={handleSubmit}
            />
          </View >
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
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
});

export default CreateNote