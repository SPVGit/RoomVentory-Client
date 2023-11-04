import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'



function ItemImage(props) {

    return (
        <View style={styles.container}>
            <Text style={[tw`mt-2 font-bold text-lg`]}>Item Image</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            onChangeText={props.handleChange('image')}
            value = {props.values.image}
            placeholder='Coming Soon'/>
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemImage;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });