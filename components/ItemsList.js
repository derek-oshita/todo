import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

import ItemsModel from '../models/ItemsModel'; 
import Header from './Header'; 
import Item from './Item'; 

class ItemsList extends React.Component {

    state = {
        items: [], 
    }

    componentDidMount() {
        ItemsModel.getAllItems()
            .then((result) => {
                this.setState({items: result})
            })
            .catch((err) => console.log('Error with ItemsList component', err))
    }
    
    render() {
        const itemsList = this.state.items.map((item) => {
            return (
                <Item item={item} key={item._id}/>
            )
        })
        return (
            <View>
            <Header title="Get Shit Done" />
                {itemsList}
            </View>
        )
    }
}

export default ItemsList; 