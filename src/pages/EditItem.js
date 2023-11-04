import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { IOS_URL, ANDROID_URL } from '@env'
import { useEffect } from 'react';
import axios from 'axios';

function EditItem({route}){

    const itemId = route.params.itemId

    let getItem = ()=>{

        const url = Platform.OS === 'ios' ? IOS_URL : ANDROID_URL;
        axios.get(`${url}/api/items/${itemId}`)
        .then((response)=>{
            console.log(response.data)
        })
        
    }

    useEffect(()=>{
        getItem()
    },[])
    return(
        <View>

        </View>
    )
}

export default EditItem;