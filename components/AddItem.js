import React from 'react'; 
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

const AddItem = () => {
    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                    <FontAwesome name="plus" size={20} color="white"/>
                Add Item</Text>
            </TouchableOpacity>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    input: {
        height: 60, 
        padding: 8, 
        fontSize: 16, 
    }, 
    btn: {
        backgroundColor: '#75B6FF', 
        padding: 9, 
        margin: 5, 
    }, 
    btnText: {
        color: 'white', 
        fontSize: 20, 
        textAlign: 'center', 
    }
  })
  
  export default AddItem; 