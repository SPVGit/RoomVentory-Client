import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function FurnitureSection(props) {



    return (
        <View style={styles.container}>

            <Text style={[tw`mt-2 font-bold text-lg`]}>Furniture Section</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 mb-6 p-2 pl-5`]} 
            onChangeText={props.handleChange('furnitureSection')}
            value = {props.values.furnitureSection}
            placeholder='Top shelf on the left'/>
            <StatusBar style="auto" />
        </View>
    )
}

export default FurnitureSection;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,

    },
  
  });