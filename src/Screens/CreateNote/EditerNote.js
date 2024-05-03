import { View, Text, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../../Components/Header/Header';
import styless from './styles';
import Modifier from '../../Components/Modifier';
import AsyncStorage from '@react-native-async-storage/async-storage';




const EditerNote = ({route , navigation}) => {

  const [title, setTitle] = useState(route.params.paramTitle);
  const [description, setDescription] = useState(route.params.paramDescription);
  const {paramId , paramTitle, paramDescription} = route.params;
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

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
    } else{
      titleInputRef.current.setNativeProps({ style: { borderBottomWidth: 2, borderColor: '#000' } })
      setTitleError('');
      setDescriptionError('');
      const oneNote = {
        title: title,
        description: description
      };
      try {
        const notes = await AsyncStorage.getItem('notes');
        if (notes) {
          const parsedNotes = JSON.parse(notes);
          const noteIndex = parsedNotes.findIndex((note) => note.id === paramId);
          if (noteIndex !== -1) {
            parsedNotes[noteIndex].title = oneNote.title;
            parsedNotes[noteIndex].description = oneNote.description;

            await AsyncStorage.setItem('notes', JSON.stringify(parsedNotes));

            navigation.replace('HomeScreen');
          }
        }
      } catch (error) {
        console.error('Error saving edited note:', error);
      }
    }
  }
    
  return (
    <SafeAreaView style={styless.container}>
      <Header 
        // title={`Editer ${paramTitle}`}
        title={"Editer "+paramTitle}
        // rigthIcon={'delete-outline'}
        leftIcon={'arrow-left'} 
        // rigthIconAction={}
        leftIconAction={() => navigation.goBack()}
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
          <View style={styless.modifier} onPress={() =>{
            navigation.navigate('EditerNoteScreen')
          }}>
            <Modifier
            title={'Modifier'} 
            onSubmit = {handleSubmit}
            />
          </View>
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

export default EditerNote;