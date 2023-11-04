import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, ScrollView, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import ItemName from '../components/addItem/ItemName'
import ItemImage from '../components/addItem/ItemImage'
import ItemQuantity from '../components/addItem/ItemQuantity'
import ItemDescription from '../components/addItem/ItemDescription';
import ItemExpiry from '../components/addItem/ItemExpiry'
import Home from '../components/addItem/Home'
import Floor from '../components/addItem/Floor'
import Room from '../components/addItem/Room'
import RoomSection from '../components/addItem/RoomSection'
import Furniture from '../components/addItem/Furniture'
import FurnitureSection from '../components/addItem/FurnitureSection'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { IOS_URL, ANDROID_URL } from '@env'

function AddItem({ route }) {

  const userId = route.params.userId

  const { height } = Dimensions.get("window");
  const [screenHeight, setScreenHeight] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    quantity: '',
    expiryDate: '',
    home: '',
    floor: '',
    room: '',
    roomSection: '',
    furniture: '',
    furnitureSection: ''

  });

  const navigation = useNavigation();

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const scrollEnabled = screenHeight > height;

  /* const handleChange = (event) => {
 
     const { name, value } = event.target;
     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   };*/

  /*const handleSubmit = (event) => {
    event.preventDefault();


    alert(`name: ${formData.name}, 
    image: ${formData.email}, 
    description: ${formData.message},
    quantity: ${formData.quantity},
    expiryDate: ${formData.expiryDate},
    home: ${formData.home},
    floor: ${formData.floor},
    room: ${formData.room},
    roomSection: ${formData.roomSection},
    furniture: ${formData.furniture},
    furnitureSection" ${formData.furnitureSection}`
    );
  };*/



  return (

    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollview}
      scrollEnabled={scrollEnabled}
      onContentSizeChange={onContentSizeChange}
    >
      <Formik
        initialValues={{
          name: "",
          image: "",
          description: "",
          quantity: '',
          expiryDate: '',
          home: '',
          floor: '',
          room: '',
          roomSection: '',
          furniture: '',
          furnitureSection: ''

        }}
        onSubmit={(values) => {
          const url = Platform.OS === 'ios' ? IOS_URL : ANDROID_URL;
          console.log(values)
          axios.post(`${url}/api/items/${userId}`, values)
        }
        }
      >
        {({ handleChange, values, handleSubmit }) => (

          <View style={styles.container} >

            <Text style={[tw`mt-2 text-2xl font-bold mb-6`]}>Add New Item</Text>

            <ItemName handleChange={handleChange} values={values} />
            <ItemDescription handleChange={handleChange} values={values} />
            <ItemImage handleChange={handleChange} values={values} />
            <ItemQuantity handleChange={handleChange} values={values} />
            <ItemExpiry handleChange={handleChange} values={values} />
            <Home handleChange={handleChange} values={values} />
            <Floor handleChange={handleChange} values={values} />
            <Room handleChange={handleChange} values={values} />
            <RoomSection handleChange={handleChange} values={values} />
            <Furniture handleChange={handleChange} values={values} />
            <FurnitureSection handleChange={handleChange} values={values} />

           
            <Pressable
              onPress={handleSubmit}
              style={[tw`border-solid border-black h-20 w-40 bg-green-400 justify-center p-2 m-6 rounded-md`]}
            >

              <Text style={[tw`font-bold text-lg text-center`]}>Submit Item
              </Text>
            </Pressable>


          </View>
        )}

      </Formik>
    </ScrollView>
  );

}

/*
<Pressable
                style={[tw`border-solid border-black h-10 bg-red-400 justify-center p-2 rounded-md`]}
                onPress={() => navigation.navigate('DeleteItem')}
              >
                <Text>Delete Item
                </Text>
              </Pressable> 
              
               <Button
              title="Submit Changes"
              onPress={handleSubmit}
              /*onPress={() => {
                navigation.navigate('AllItems')
              }}
              style={[tw`p-2`]}
            />
*/

export default AddItem;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#0059b3',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'5%',
    overflow: 'scrollY',
    borderRadius:30
  },
  scrollview: {
    paddingBottom: 250,


  },

});