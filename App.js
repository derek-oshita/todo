import React, {useState} from 'react'; 
import {View, Text, StyleSheet, Image, FlatList, Alert, AppState, Button, LogBox} from 'react-native'; 
import 'react-native-get-random-values'; 

import Header from './components/Header'; 
import ItemsList from './components/ItemsList';

// IGNORE LOGBOX NOTIFICATIONS
LogBox.ignoreLogs(['Remote debugger']);

const App = () => {

  return (
    <View style={styles.container}>
      <Header title="Task List" />
      <ItemsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App; 
