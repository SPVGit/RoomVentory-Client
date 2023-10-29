import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



/*const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];*/

const ItemDropdown = (props) => {


  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const allItemsArray = props.allItems
  console.log(props.allItems)

  return (
    <View style={styles.container}>

      {allItemsArray.map((item, index) => {
        return (
          <View>
          <Dropdown
            key={index}
            style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
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
          <Button
                title='Edit Item'
                onPress={() => navigation.navigate('EditItem')}
            />
           <Button
                title='Delete Item'
                onPress={() => navigation.navigate('EditItem')}
            />
          </View>
        )
      })}


    </View>
  );
};

export default ItemDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },


});

