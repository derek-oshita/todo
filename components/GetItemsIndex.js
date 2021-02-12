import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

import GetItemsModel from '../models/GetItemsModel'; 
import ItemsList from '../components/ItemsList'; 

const url = 'https://mighty-woodland-97273.herokuapp.com/api/items/'; 

class GetItemsIndex extends React.Component {
    state = {
        items: [], 
    }

    componentDidMount() {
        GetItemsModel.getAllItems()
            .then((result) => {
                this.setState({items: result})
            })
            .catch((err) => console.log('Error with GetItemsIndex', err))
    }

    // getData = async () => {
    //     try {
    //         let response = await fetch (url); 
    //         // let json = await response.json(); 
    //         // console.log(json)
    //         // return json
    //         let data = await response.text(); 
    //         console.log(data)
    //     } catch (error) {
    //         console.error('GetItemsIndex Error: ', error)
    //     }
    // }

    render() {
        return (
            <ItemsList items={this.state.items}/>
        )
    }
}

export default GetItemsIndex; 