// VARIABLES 
// const url = 'https://mighty-woodland-97273.herokuapp.com/api/items'; 
const url = 'https://enigmatic-garden-30320.herokuapp.com/api/v1/comment'; 

// const url = 'https://jsonplaceholder.typicode.com/users'; 

// MODEL 
class GetItemsModel {
    static getAllItems = () => {
        return fetch(url, {
            method: 'GET', 
            headers: {
                Accept: 'application/json'
            }, 
            // body: JSON.stringify({
            //     'text': text, 
            // })
        })
    }; 
    // 
}

export default GetItemsModel; 