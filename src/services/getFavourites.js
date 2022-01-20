const getFavouritesApi = () => 
  fetch('http://localhost:3001/api/v1/favourites', {
      method: 'GET',
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response)=>{
      if(response.ok){
        return response.json();
      }
    })
export {getFavouritesApi}