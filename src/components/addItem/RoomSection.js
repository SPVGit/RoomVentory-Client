import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function RoomSection(props) {


    return (
        <View style={styles.container}>
            <Text style={[tw`mt-2 font-bold text-lg`]}>Room Section</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            onChangeText={props.handleChange('roomSection')}
            value = {props.values.roomSection}
            placeholder='Middle-right'/>
            <StatusBar style="auto" />
        </View>
    )
}

export default RoomSection;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });