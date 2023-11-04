import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { Select, Center, Box, CheckIcon, } from "native-base";
import { useState } from 'react';
import { NativeBaseProvider } from 'native-base';

function Floor(props) {

    const [floor, setFloor] = useState("");
    return (
        /*
        <View style={styles.container}>
             <Text>Floor</Text>

        <NativeBaseProvider>
            <Center >
                <Box style={[tw` w-80 `]}>

                    <Select 
                    
                    selectedValue={floor}  
                    placeholder="Choose Floor"  
                    style={[tw`border-4 text-center`]}
                    _selectedItem={{
                        bg: "blue.300"
                    }} mt={1} onValueChange={itemValue => setFloor(itemValue)}
                   
                    
                    >

                        <Select.Item label="1" value="1" style={[tw`items-center`]} />
                        <Select.Item label="2" value="2" style={[tw`items-center`]}/>
                        <Select.Item label="3" value="3" style={[tw`items-center`]}/>
                        <Select.Item label="4" value="4"style={[tw`items-center`]} />
                        <Select.Item label="Other" value="Other" style={[tw`items-center`]} />

                    </Select>
                </Box>
            </Center>
        </NativeBaseProvider>
        </View>*/
        
        <View style={styles.container}>

            <Text style={[tw`mt-2 font-bold text-lg`]}>Floor</Text>
            <TextInput style={[tw`rounded border-solid border-4 w-80 m-2 p-2 pl-5`]} 
            onChangeText={props.handleChange('floor')}
            value = {props.values.floor}
            placeholder='2'/>
            <StatusBar style="auto" />
        </View>
    )

  

}

export default Floor;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

});