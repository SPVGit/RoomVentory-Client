import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Dimensions, View } from 'react-native';
import { Card } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IOS_URL, ANDROID_URL } from '@env'
import ItemDropdown from '../components/allItems/ItemDropdown';

function AllItems() {

    let [allItems, setAllItems] = useState([])
    const { height } = Dimensions.get("window");
    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight);
    };

    const scrollEnabled = screenHeight > height;

    let getAllItems = () => {

        const url = Platform.OS === 'ios' ? IOS_URL : ANDROID_URL;

        axios.get(`${url}/api/items`)
            .then((response) => {
                const items = response.data.itemsArray.map(item => [
                { label: item.name, value: '1' },
                { label: item.image, value: '2'},
                { label: item.description, value: '3' },
                { label: item.quantity.toString(), value: '4' },
                { label: item.expiryDate, value: '5' },
                { label: item.home, value: '6' },
                { label: item.floor, value: '7' },
                { label: item.room, value: '8' },
                { label: item.roomSection, value: '9' },
                { label: item.furniture, value: '10' },
                { label: item.furnitureSection, value: '11' }])
                setAllItems(items)
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
            <Card>


                <View>
                    <ItemDropdown allItems={allItems} />
                </View>



                {  /*<Card>
                                <Text><Text>Item: </Text>{item.name}</Text>
                                <Text><Text>Image: </Text>{item.image}</Text>
                                <Text><Text>Description: </Text>{item.description}</Text>
                                <Text><Text>Quantity :</Text>{item.quantity}</Text>
                                <Text>{item.expiryDate}</Text>
                                <Text>{item.home}</Text>
                                <Text>{item.floor}</Text>
                                <Text>{item.room}</Text>
                                <Text>{item.roomSection}</Text>
                                <Text>{item.furniture}</Text>
                                <Text>{item.furnitureSection}</Text>



                </Card>*/}


            </Card>
        </ScrollView>
    )


}

export default AllItems;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

        overflow: 'scrollY'
    },
})

/*

[{"createdAt": "2023-10-28T13:27:21.675Z", "description": "Dark red", "expiryDate": "NA", "floor": "0", "furniture": "brown bookshelf", "furnitureSection": "On top", "home": "Subarna residence main", "id": 7, "image": "http://image.com/", "lastUpdatedAt": "2023-10-28T13:27:21.675Z", "name": "flower vase", "quantity": 2, "room": "sitting room", "roomSection": "front middle wall"}, 
{"createdAt": "2023-10-28T13:27:21.351Z", "description": "red knitted", "expiryDate": "NA", "floor": "1", "furniture": "beige chest of drawers", "furnitureSection": "top left drawer", "home": "Subarna residence main", "id": 5, "image": "http://image.com/", "lastUpdatedAt": "2023-10-28T13:27:21.351Z", "name": "gloves", "quantity": 1, "room": "master bedroom", "roomSection": "right back wall"}, 
{"createdAt": "2023-10-28T13:27:21.532Z", "description": "Nivea", "expiryDate": "30/02/2024", "floor": "1", "furniture": "white cabinet", "furnitureSection": "middle shelf", "home": "Subarna residence main", "id": 6, "image": "http://image.com/", "lastUpdatedAt": "2023-10-28T13:27:21.532Z", "name": "hand cream", "quantity": 1, "room": "bathroom", "roomSection": "front left wall"}, 
{"createdAt": "2023-10-28T13:27:22.015Z", "description": "Giraffe print", "expiryDate": "NA", "floor": "1", "furniture": "Shelving unit", "furnitureSection": "middle shelf", "home": "Melody residence main", "id": 8, "image": "http://image.com/", "lastUpdatedAt": "2023-10-28T13:27:22.015Z", "name": "watch", "quantity": 1, "room": "box room", "roomSection": "left middle wall"}]

Array.map: item => [{label: item.name, value : 1},
{label: item.image, value : 2},
{label: item.description, value : 3},
{label: item.quantity, value : 4},
{label: item.expiryDate, value : 5},
{label: item.home, value : 6}, 
{label: item.floor, value : 7},
{label: item.room, value : 8},
{label: item.roomSection, value : 9},
{label: item.furniture, value : 10},
{label: item.furnitureSection, value : 11}]
*/