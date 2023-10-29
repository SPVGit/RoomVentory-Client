import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import ItemName from '../components/addItem/ItemName'
import ItemImage from '../components/addItem/ItemImage'
import ItemQuantity from '../components/addItem/ItemQuantity'
import ItemExpiry from '../components/addItem/ItemExpiry'
import Home from '../components/addItem/Home'
import Floor from '../components/addItem/Floor'
import Room from '../components/addItem/Room'
import RoomSection from '../components/addItem/RoomSection'
import Furniture from '../components/addItem/Furniture'
import FurnitureSection from '../components/addItem/FurnitureSection'
import React, { useState, useEffect } from "react";

function AddItem() {

    const { height } = Dimensions.get("window");
    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight);
      };

      const scrollEnabled = screenHeight > height;

      return (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}
        >
          <View style={styles.container} >

            <Text  >Add New Item</Text>
            <ItemName />
            <ItemImage />
            <ItemQuantity />
            <ItemExpiry />
            <Home />
            <Floor />
            <Room />
            <RoomSection />
            <Furniture />
            <FurnitureSection />
            <FurnitureSection />
            
            <FurnitureSection />
            
            <FurnitureSection />
            <FurnitureSection />
            <FurnitureSection />
            <FurnitureSection />
            
            
        </View>
        </ScrollView>
      );

}

export default AddItem;

const styles = StyleSheet.create({
    container: {
        
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
       
        overflow:'scrollY'
    },
    

});