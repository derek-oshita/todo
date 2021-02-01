import React, {useState} from 'react'; 
import {View, Text, StyleSheet, Image, FlatList, Alert, AppState, Button} from 'react-native'; 
import 'react-native-get-random-values'; 
import { v4 as uuid } from 'uuid'; 
// import * as axios from 'react-native-axios'; 

import Header from './components/Header'; 
import ListItem from './components/ListItem'; 
import AddItem from './components/AddItem'; 
import GetItemsIndex from './components/GetItemsIndex'; 

// axios.get('http://localhost:3000/api/items')
//   .then(function (response) {
//     let data = response.data; 
//     console.log(data); 
//   })
//   .catch(function (error) {
//     console.log(`API Requsest Error: ${error}`)
//     throw error
//   }); 




const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Code'}, 
    {id: uuid(), text: 'Clean'}, 
    {id: uuid(), text: 'Walk Mila'}, 
    {id: uuid(), text: 'Train'}, 
  ]); 

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    }); 
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please add an item...', {text: 'Got it!'})
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems]
      }); 
    }
  }


  return (
    <View style={styles.container}>
      <Header title="Task List" />
      <AddItem addItem={addItem}/>
      <GetItemsIndex />
      {/* <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem deleteItem={deleteItem} item={item}/>}
      /> */}
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
