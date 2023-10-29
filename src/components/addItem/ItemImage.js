import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'


function ItemImage() {

    return (
        <View style={styles.container}>
            <Text>Item Image</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80`]} />
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