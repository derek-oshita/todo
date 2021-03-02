import 'react-native-gesture-handler';
import React, {useState} from 'react'; 
import { View, Text, StyleSheet, LogBox, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ItemsList from './components/ItemsList';
import CreateItem from './components/CreateItem'; 
import HomeScreen from './components/Home'; 

// IGNORE LOGBOX NOTIFICATIONS
LogBox.ignoreLogs(['Remote debugger']);


// https://reactnavigation.org/docs/params

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      {/* <View style={styles.container}>
        <Header title="Task List" />
        <ItemsList />
        <CreateItem />
      </View> */}

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="Items List" component={ItemsList} />
      </Stack.Navigator>




    </NavigationContainer>
  )
}



export default App; 
