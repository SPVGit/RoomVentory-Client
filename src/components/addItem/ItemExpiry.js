

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function ItemExpiry(props) {

    return (
        <View style={styles.container}>
            <Text style={[tw`mt-2 font-bold text-lg`]}>Item Expiry Date</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            placeholder='05/11/2025'
            onChangeText={props.handleChange('expiryDate')}
            value = {props.values.expiryDate}/>
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemExpiry;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });