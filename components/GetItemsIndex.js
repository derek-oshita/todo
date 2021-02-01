import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

getData = () => {
    return fetch('https://enigmatic-garden-30320.herokuapp.com/api/v1/comment')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.log(error)
    })
}



// http://73.223.154.156:4000/api/items

// issues: https://github.com/expo/expo/issues/1606

/* 
TRY DEPLOYING THE BACKEND AND THEN USING CONNECTION STRING TO MONGODB VIA CLOUD ATLAS


*/

class GetItemsIndex extends React.Component {
    state = {
        state: {}
    }

    // getData = () => {
    //     return fetch('http://73.223.154.156:4000/api/items')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }


    render() {
        return (
            <Button title="Get Items" onPress={() => getData()}>

            </Button>
        )
    }
}

export default GetItemsIndex; 