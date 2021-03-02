// VARIABLES 




const url = 'https://mighty-woodland-97273.herokuapp.com/api/items'; 

// MODEL 
class GetItemsModel {
    
    static getAllItems = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default GetItemsModel; 