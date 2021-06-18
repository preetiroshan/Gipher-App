const addToFavouritesApi = (item) =>
fetch("http://localhost:3001/api/v1/favourites", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify(item)
})   //add the json server url
.then((res)=>{
  if(res.ok){
    return res.json()
  }
})
const removeFromFavouritesApi = (id) =>
fetch(`http://localhost:3001/api/v1/favourites/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})   //add the json server url
.then((res)=>{
  if(res.ok){
    return res.json()
  }
})
export {addToFavouritesApi, removeFromFavouritesApi}