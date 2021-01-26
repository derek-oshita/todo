import React, {useState} from 'react'; 
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'; 
import 'react-native-get-random-values'; 
import { v4 as uuid } from 'uuid'; 

import Header from './components/Header'; 
import ListItem from './components/ListItem'; 

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Code'}, 
    {id: uuid(), text: 'Clean'}, 
    {id: uuid(), text: 'Walk Mila'}, 
    {id: uuid(), text: 'Train'}, 
  ]); 

  return (
    <View style={styles.container}>
      <Header title="Task List" />
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem item={item}/>}
      />
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
