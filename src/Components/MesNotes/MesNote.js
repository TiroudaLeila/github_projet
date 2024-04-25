import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { createRef, useEffect, useState } from 'react';
import {useRef} from 'react';

const MesNote = (props) => {
  
  const {DATA, setNewDataId, navigation} = props;
  const noteRefs = useRef([])

// initialisation des etats ,utiliser pour stocker les indices des notes selectionnées
  const [tab, setTab] = useState([]);

  //utiliser pour stocker les identifiants(id) des notes sélectionnées.
  const [tabItemId, setTabItemId] = useState([]);
// Il est utilisé pour mettre à jour newDataId chaque fois que tabItemId change. newDataId est probablement utilisé ailleurs dans le composant parent
  useEffect(() => {
    setNewDataId(tabItemId);
  }, [tabItemId]);

//Cette fonction est appelée lorsqu’une note est longuement pressée.Elle ajoute ou supprime l’indice et l’identifiant de la note des tableaux tab et tabItemId, et met à jour le style de la note en conséquence.
  const handleLongPress = (index, itemId) => {
    // console.log(noteRefs[index].current);
    if (!tab.includes(index)) {
      setTab([...tab, index]);
      setTabItemId(prevState => ([...prevState, itemId]))
    
      noteRefs.current[index].current.setNativeProps({
        style: {
          borderColor: '#CF4C6C' ,
          borderWidth: 1,
        }
      }) 
    } else {
      const filtre = tab.filter(item => item !== index);
      setTab(filtre);
      const filtre2 = tabItemId.filter(item => item !== itemId);
      setTabItemId(filtre2);
//mettre a jour les proprietes du button
      noteRefs.current[index].current.setNativeProps({
        style: {
          borderColor: '#000' ,
          borderWidth: 1,
        }
      }) 
    }
  };

  //C’est une fonction qui retourne un composant TouchableOpacity pour chaque note. Chaque note a un titre, une description et change de style lorsqu’elle est sélectionnée.
const item = ({item, index}) => {
  const {title, description} = item;
  noteRefs.current[index] = createRef();

  return (
    <TouchableOpacity
      ref={noteRefs.current[index]}
      onLongPress={()  => handleLongPress(index, item.id) }
      onPress={() => navigation.navigate('EditerNoteScreen' , {
        paramId : item.id,
        paramTitle : item.title,
        paramDescription : item.description,

      })}
      activeOpacity={0.8}
      style={{
        width: '40%',
        height: 'auto',
        backgroundColor: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 4,
      }}
    > 
      {
        tabItemId.includes(item.id) && (
          <View style={{
            borderColor: '#CF4C6C',
            borderWidth: 1,
            width: 30,
            height: 30,
            borderRadius: 50,
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{
              backgroundColor: '#CF4C6C',
              width: 25,
              height: 25,
              borderRadius:  50
            }}/>
          </View>
        )
      }
      
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
            marginBottom: 10,
          }}>
          .{title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#000',
          }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//Le composant retourne une View qui contient un texte indiquant le nombre de notes sélectionnées et une FlatList qui affiche toutes les notes.
  return (
    <View>
      {/* <TouchableOpacity
      onPress={selectAll }
      >
        <View>
        <Text style={{
          fontSize:14,
          fontWeight:'400',
          color:'#000',
          textAlign: 'right',
          padding: 10,
        }}>Tout Selectionner</Text>
        </View>
        
      </TouchableOpacity> */}
      <FlatList
        data={DATA}
        renderItem={item}
        keyExtractor={item => item?.id}
        numColumns={2}
      />
    </View>
  );
};

export default MesNote;
