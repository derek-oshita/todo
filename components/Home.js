import React, {useState} from 'react'; 
import { View, Text, StyleSheet, LogBox, Button } from 'react-native'; 


function HomeScreen({ navigation }) {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Items List"
          onPress={() => navigation.navigate('Items List')}
        />
      </View>
    );
  }


export default HomeScreen; 