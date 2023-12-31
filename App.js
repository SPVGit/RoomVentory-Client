
import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home'
import HomePage from './src/pages/HomePage'
import AddItem from './src/pages/AddItem'
import SignUp from './src/pages/SignUp'
import LogIn from './src/pages/LogIn';
import SearchItem from './src/pages/SearchItem';
import AllItems from './src/pages/AllItems';
import ItemDropdown from './src/components/allItems/ItemDropdown';
import EditItem from './src/pages/EditItem';

const Stack = createNativeStackNavigator();
 
export default function App() {

//wow

  return (

    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SearchItem" component={SearchItem} />
        <Stack.Screen name="AllItems" component={AllItems} />
        <Stack.Screen name="EditItem" component={EditItem} />
       
      </Stack.Navigator>

    </NavigationContainer>
    

    
  );
}

// <Stack.Screen name="Build Home" component={BuildHome} />
