import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

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
        state: {}
    }

    // componentDidMount() {
    //     fetch(url, {
    //         method: 'GET', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     .then((response) => response.json()) 
    //     .then((data) => {
    //         this.setState({
    //             state: data
    //         })
    //     })
    //     .catch((err) => console.log('Error: ', err))
    // }

    render() {
        return (
            <Button title="Get Items" onPress={() => getData()}>

            </Button>
        )
    }
}

export default GetItemsIndex; 