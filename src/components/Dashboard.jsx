import React from 'react'
import FavouritesCarousel from './FavouritesCarousel';
import Recommendation from './Recommendation'
import TrendingCarousel from './TrendingCarousel'
import UploadFirebase from './UploadFirebase';

export default function Dashboard(props) {

  const passAddToFav = (original) => {
    props.addToFav(original)
  }
  return (
    <div>
      <TrendingCarousel addToFav={passAddToFav} />
      <UploadFirebase />
      <Recommendation addToFav={passAddToFav} id="recommendations" />
      {
        localStorage.getItem('token') &&
        <FavouritesCarousel id="favourites" />
      }
    </div>
  )
}
