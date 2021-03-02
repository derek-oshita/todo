// VARIABLES 
const url = 'https://mighty-woodland-97273.herokuapp.com/api/items'; 

// MODEL 
class ItemsModel {
    static getAllItems = () => {
      return fetch(url)
        .then((response) => response.json())
    }

    static createItem = (item) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      })
        .then((response) => response.json())
    }

    static destroyItem = (id) => {
      return fetch(`${url}/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
    }
}

export default ItemsModel; 