// VARIABLES 
// const url = 'https://mighty-woodland-97273.herokuapp.com/api/items'; 
const url = 'https://enigmatic-garden-30320.herokuapp.com/api/v1/comment'; 

// MODEL 
class GetItemsModel {
    static getAllItems = () => {
        return fetch(url)
            .then((response) => {
                if (response.headers.get('content-type').match(/application\/json/)) {
                    return response.json(); 
                }
                return response.text(); 
                // return response.json(); 
            })
    }
}

export default GetItemsModel; 