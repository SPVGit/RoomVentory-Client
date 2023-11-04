import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames'

const ItemDropdown = (props) => {

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const navigation = useNavigation();

  const allItemsArray = props.allItems.items
  const allImages = props.allItems.images
  const allIds = props.allItems.ids



  return (
    <View style={styles.container}>

      {allItemsArray.map((item, index) => {
        return (
          <View key={allIds[index]}>
            <Dropdown
              key={index}
              style={[styles.dropdown]}
              itemTextStyle={styles.itemTextStyle}
              itemContainerStyle={styles.itemContainerStyle}
              placeholderStyle={styles.placeholderStyle}
              data={item}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={item[0].label}
              value={value}
              onFocus={() => { setIsFocus(true); setValue('') }}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue('Item Details')
                setIsFocus(false);
              }}

            />
            <View style={styles.rest}>
              <Image
                style={styles.image}
                //style={{width: 50, height: 50}} 
                source={{uri:allImages[index]}}
            
               
              />

              <Pressable
                style={[tw`border-solid border-black h-10 bg-green-400 justify-center p-2 rounded-md`]}
                onPress={() => navigation.navigate('EditItem', {
                  itemId: allIds[index]
                })}
              >
                <Text>Edit Item
                </Text>
              </Pressable>

              <Pressable
                style={[tw`border-solid border-black h-10 bg-red-400 justify-center p-2 rounded-md`]}
                onPress={() => navigation.navigate('DeleteItem')}
              >
                <Text>Delete Item
                </Text>
              </Pressable>
            </View>


          </View>
        )
      })}


    </View>
  );
};

export default ItemDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius:10

  },
  rest: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'

  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 8,
    paddingHorizontal: 8,

    
  },

 /* label: {
    position: 'absolute',
    backgroundColor: 'yellow',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },*/
  placeholderStyle: {
    fontSize: 18,
    fontWeight:'bold'
  },
  image: {
    height: 50,
    width: 50,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:10
  },

  itemTextStyle: {
    height: 22,
    fontWeight:'bold',

  
  },
  itemContainerStyle:{
    backgroundColor:'#bfbfbf'
  }

  

});

