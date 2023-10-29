import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function SearchItem() {


    return (
        <View style={styles.container}>
            <Text>Type Item Name</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80`]} />
            <StatusBar style="auto" />
        </View>
    )
}

export default SearchItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});