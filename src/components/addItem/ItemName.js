 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'



function ItemName(props) {

    return (
        <View style={styles.container}>
            <Text style={[tw`mt-2 font-bold text-lg`]}>Item Name</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]}
            onChangeText={props.handleChange('name')}
            value = {props.values.name}
            placeholder='Coffee Mug'/> 
            
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemName;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    },

  
  });