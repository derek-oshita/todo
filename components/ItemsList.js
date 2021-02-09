import React, {useState, Component} from 'react'; 
import {View, Text, StyleSheet, Image, FlatList, Alert, AppState, Button, LogBox} from 'react-native'; 

function ItemsList (props) {
    let items = props; 

    return (
            <View>
            <Button title="Get Items" onPress={() => console.log(props)}>
            
            </Button>
            </View>
        )
    
}

export default ItemsList; 