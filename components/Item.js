import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons'; 

import ItemsModel from '../models/ItemsModel'; 

const Item = ({ item }) => {
    
    const handleDelete = () => {
        ItemsModel.destroyItem(item._id)
        .then((res) => console.log(res))
        .catch((err) => console.log('Error with Item Component: ', err))
    }

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView} >
                <Text style={styles.listItemText}>{item.title}</Text>
            {/* <Button onPress={this.handleDelete}><FontAwesome name="remove" size={20} color="firebrick" /></Button> */}
            <Button title="Delete" onPress={handleDelete}></Button>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem : {
        padding: 15, 
        backgroundColor: '#f8f8f8', 
        borderBottomWidth: 1, 
        borderColor: '#eee'
    }, 
    listItemView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    listItemText: {
        fontSize: 18, 
    }
})

export default Item; 