import React from 'react'
// import { addToFavouritesApi } from '../services/FavouritesServices';
import FavouritesCarousel from './FavouritesCarousel';
// import Home from './Home/Home';
import Recommendation from './Recommendation'
import TrendingCarousel from './TrendingCarousel'
import UploadFirebase from './UploadFirebase';

export default function Dashboard(props) {
  // const addToFav = (original) => {
  //   addToFavouritesApi(original)
  //   console.log(original);
  //   console.log("hi");
  // };
  const passAddToFav = (original) => {
    props.addToFav(original)
  }
  return (
    <div>
      <TrendingCarousel addToFav={passAddToFav} />
       <UploadFirebase />
      <Recommendation addToFav={passAddToFav} id="recommendations"/> 
      {
        localStorage.getItem('token') && 
        <FavouritesCarousel  id="favourites" />
      }
    </div>
  )
}
