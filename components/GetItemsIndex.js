import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

import GetItemsModel from '../models/GetItemsModel'; 
import ItemsList from '../components/ItemsList'; 

const url = 'https://mighty-woodland-97273.herokuapp.com/api/items/'; 

// getData = () => {
//     return fetch (url, {
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     .then((response) => {
//         // used .text() instead of .json() to get a success message... 
//         return response.text()
//     })
//     .then((data) => console.log('Success:', data))
//     .catch((error) => {
//         console.log('Error:', error)
//     })
// }


/* 
random user works; https://randomuser.me/api/

https://github.com/expo/expo/issues/1606

backend endpoint: https://mighty-woodland-97273.herokuapp.com/api/items

quaranteam backend endpoint: https://enigmatic-garden-30320.herokuapp.com/api/v1/comment

READ NETWORKING DOCS: https://reactnative.dev/docs/network

TRY CREATING A MODEL LIKE IN CLIENT QUARANTEAM... 
*/

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