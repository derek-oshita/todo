// VARIABLES 

// THESE DO NOT
const url = 'https://mighty-woodland-97273.herokuapp.com/api/items'; 
// const url = 'https://enigmatic-garden-30320.herokuapp.com/api/v1/comment';

// THIS WORKS
// const url = 'https://jsonplaceholder.typicode.com/users'; 

// MODEL 
class GetItemsModel {
    // static getAllItems = () => {
    //     return fetch(url, {
    //         method: 'GET', 
    //         headers: {
    //             Accept: 'application/json'
    //         }, 
    //     })
    // }; 
    static getAllItems = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default GetItemsModel; 