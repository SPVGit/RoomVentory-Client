import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function ItemQuantity(props) {

    return (
        <View style={styles.container}>
            <Text style={[tw`mt-2 font-bold text-lg`]}>Item Quantity</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            onChangeText={props.handleChange('quantity')}
            value = {props.values.quantity}
            placeholder='15'/>
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemQuantity;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });