import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames'
import Svg, { SvgXml } from 'react-native-svg';
import ItemImage from './ItemImage';


const ItemDropdown = (props) => {

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const navigation = useNavigation();

  const allItemsArray = props.allItems.items
  const allImages = props.allItems.images
  const allIds = props.allItems.ids

  const deleteXML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>`

const editXML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>`

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

              <ItemImage allImages = {allImages[index]} />
              

              <Pressable
                style={[tw`border-solid border-black h-10 w-10 bg-green-400 justify-center p-2 rounded-md`]}
                onPress={() => navigation.navigate('EditItem', {
                  itemId: allIds[index]
                })}
              >
               <SvgXml
                  width='80%'
                  height="80%"
                  color='#5E3B04'
                  
                  xml={editXML}
                />
              </Pressable>

              <Pressable
                style={[tw`border-solid border-black h-10 w-10 bg-red-400 justify-center items-center p-2 rounded-md`]}
                onPress={() => navigation.navigate('DeleteItem')}
              >

                <SvgXml
                  width='80%'
                  height="80%"
                  color='#5E3B04'
                  
                  xml={deleteXML}
                />
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
    backgroundColor: '#EAAC77',//orange
    padding: 16,
    borderRadius: 10

  },
  rest: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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


  placeholderStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  

  itemTextStyle: {
    height: 22,
    fontWeight: 'bold',


  },
  itemContainerStyle: {
    backgroundColor: '#F3EAA3'
  }



});

/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
 */