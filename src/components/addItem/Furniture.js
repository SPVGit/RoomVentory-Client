import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function Furniture(props) {



    return (
        <View style={styles.container}>

            <Text style={[tw`mt-2 font-bold text-lg`]}>Furniture</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            onChangeText={props.handleChange('furniture')}
            value = {props.values.furniture}
            placeholder='Black cupboard'/>
            <StatusBar style="auto" />
        </View>
    )
}

export default Furniture;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });