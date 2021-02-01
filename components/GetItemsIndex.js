import React, {Component} from 'react';
import {View, Button} from 'react-native'; 

const getData = () => {
    fetch('http://localhost:3000/api/items')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

class GetItemsIndex extends React.Component {
    state = {
        state: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/items`)
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    state: data
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <Button title="Get Items" onPress={() => getData()}>

            </Button>
        )
    }
}

export default GetItemsIndex; 