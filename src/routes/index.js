import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import CreateNote from '../Screens/CreateNote/CreateNote';
import EditerNote from '../Screens/CreateNote/EditerNote';



const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="HomeScreen" 
              screenOptions={{headerShown: false}}
            >
              <Stack.Screen name="HomeScreen" component={Home} />
              <Stack.Screen name="CreateNoteScreen" component={CreateNote} />
              <Stack.Screen name="EditerNoteScreen" component={EditerNote} />
            

            </Stack.Navigator>
        </NavigationContainer>
  )
}
export default Routes