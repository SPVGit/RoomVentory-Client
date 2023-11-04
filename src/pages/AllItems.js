import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Dimensions, View } from 'react-native';
import { Card } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IOS_URL, ANDROID_URL } from '@env'
import ItemDropdown from '../components/allItems/ItemDropdown';

function AllItems() {

    let [allItems, setAllItems] = useState({items:[],images:[]})
    const { height } = Dimensions.get("window");
    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight);
    };

    const scrollEnabled = screenHeight > height;

    let getAllItems = () => {

        const url = Platform.OS === 'ios' ? IOS_URL : ANDROID_URL;

        const firstLetterToCaps = (str) =>{
            str.charAt(0).toUpperCase() + str.slice(1);
        }

        axios.get(`${url}/api/items`)
            .then((response) => {
                console.log(response.data.itemsArray)
                const items = response.data.itemsArray.map(item => [

                { label: `★ ${item.name}`, value: '1' },
                { label: `     DSC:      ${item.description}`, value: '2' },
                { label: `     QTY:       ${item.quantity.toString()}`, value: '3' },
                { label: `     EXP:       ${item.expiryDate}`, value: '4' },
                { label: `     HOME:   ${item.home}`, value: '5' },
                { label: `     FLR:        ${item.floor}`, value: '6' },
                { label: `     ROOM:   ${item.room}`, value: '7' },
                { label: `     RMSC:    ${item.roomSection}`, value: '8' },
                { label: `     FURN:     ${item.furniture}`, value: '9' },
                { label: `     FNSC:    ${item.furnitureSection}`, value: '10' }
            
            ])

                const images = response.data.itemsArray.map(item=>item.image)

                const ids = response.data.itemsArray.map(item=>item.id)

                setAllItems({items:items, images:images, ids:ids})
            })
            .catch(err => console.log(err))


    }

    useEffect(() => {
        getAllItems()
    }, [])


    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={onContentSizeChange}
        >
           {/* <Card >*/}


                <View style={styles.container}>
                <Text style={[tw`mt-2 text-2xl font-bold mb-6 text-center`]}>All Items</Text>
                    <ItemDropdown allItems={allItems} />
                </View>

           {/* </Card>*/}
        </ScrollView>
    )


}

export default AllItems;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#5E3B04',//Brown
        padding:'5%',
        overflow: 'scrollY',
        borderRadius:30
      },

    scrollview:{
        paddingBottom:250,
        
    },

})

