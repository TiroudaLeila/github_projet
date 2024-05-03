import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home/Home';
import CreateNote from '../Screens/CreateNote/CreateNote';
import EditerNote from '../Screens/CreateNote/EditerNote';
import AccueilScreen from '../Screens/Accueil/AccueilScreen';
import ParametreScreen from '../Screens/Parametre/ParametreScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import CustomDrawer from '../Components/Custom/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditerProfileScreen from '../Screens/EditerProfile';
import SignUp from '../Screens/Signup/SignUp';


const NativeStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator  
      initialRouteName="SignUpScreen" 
      screenOptions={{headerShown: false}}
    >
    <Stack.Screen name="SignUpScreen" component={SignUp} />
    <Stack.Screen name="HomeScreen" component={Home}/>
    <Stack.Screen name="CreateNoteScreen" component={CreateNote} />
    <Stack.Screen name="EditerNoteScreen" component={EditerNote} />
    </Stack.Navigator>
  )
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator
                  drawerContent={props => <CustomDrawer {...props}/>}
                  screenOptions={{
                  headerShown: false,
                  drawerInactiveBackgroundColor:'aa18ea',
                  drawerInactiveTintColor:'#CF4C6C'
                }}
                initialRouteName="Home" 
                
              >
      <Drawer.Screen name="Home" component={ NativeStackNavigator} />
      {/* <Drawer.Screen name="Accueil" component={AccueilScreen}/> */}
      <Drawer.Screen name="Parametres" component={ParametreScreen}/>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="EditerProfile" component={EditerProfileScreen}/>
    </Drawer.Navigator>

  )

  }

// <NavigationContainer>
//           <Stack.Navigator  
//               initialRouteName="HomeScreen" 
//               screenOptions={{headerShown: false}}
//               >
//               <Stack.Screen name="HomeScreen" component={Home} />
//               <Stack.Screen name="CreateNoteScreen" component={CreateNote} />
//               <Stack.Screen name="EditerNoteScreen" component={EditerNote} />
//       </Stack.Navigator>
//       {/* <DrawerNavigator/> */}
//         </NavigationContainer>
// const Stack = createNativeStackNavigator();
const Routes = () => {
  
  return (
        <NavigationContainer>
            <DrawerNavigator/>
            
        </NavigationContainer>
  )
}
export default Routes