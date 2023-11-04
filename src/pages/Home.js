import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function Home({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to RoomVentory!</Text>
            <Text>Don't Have an Account?</Text>
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
            <Text>Otherwise, go to your account:</Text>
            <Button
                title="Log In"
                onPress={() => navigation.navigate('LogIn')}
            />
             <Text>Add New Item</Text>
            <Button
                title="Add Item"
                onPress={() => navigation.navigate('AddItem', {
                    userId: 'aa711089-9063-4f87-84f0-0a7ef2a44d77'
                  })}
            />
            <Text>Search Item</Text>
            <Button
                title="Search Item"
                onPress={() => navigation.navigate('SearchItem')}
            />
            <Text>All Items</Text>
            <Button
                title="See All Items"
                onPress={() => navigation.navigate('AllItems')}
            />
            <Text>Item Dropdown</Text>
            <Button
                title="Item Dropdown"
                onPress={() => navigation.navigate('ItemDropdown')}
            />
        
        </View>
    )
}

export default Home