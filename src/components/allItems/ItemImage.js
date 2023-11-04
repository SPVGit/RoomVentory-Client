
import { StyleSheet,Pressable, Image, View } from 'react-native';
import { useState } from 'react';



function ItemImage(props) {

    const [smallImg, setSmallImage] = useState(true)


    return (
        <View>

            {smallImg ? 
            <Pressable
        
            onPress={()=> setSmallImage(false)}>
                <Image
                    style={styles.image1}
                    //style={{width: 50, height: 50}} 
                    source={{ uri: props.allImages }}
                    
                    
    
                />
    
    
            </Pressable>
            :

            <Pressable
        
        onPress={()=> setSmallImage(true)}>
            <Image
                style={styles.image2}
                //style={{width: 50, height: 50}} 
                source={{ uri: props.allImages }}
                
                

            />


        </Pressable>
            }

        

        

        </View>

    )
}

export default ItemImage

const styles = StyleSheet.create({
    image1: {
        height: 50,
        width: 50,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10
      },
      image2: {
     height:200,
        width: 200,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10
      },
})