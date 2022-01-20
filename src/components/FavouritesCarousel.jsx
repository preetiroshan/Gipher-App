import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromFavouritesApi } from "../services/FavouritesServices";
import { getFavouritesApi } from "../services/getFavourites";
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function FavouritesCarousel() {

	const [favouritesSubSection, setFavouritesSubSection] = useState([]);
	
	useEffect(() => {
			getFavouritesApi()
				.then((data) => {
					//Here we create a 2D array from all the favourite gifs, where maximum length of each sub-array is 6
					const newArr = [];
					while (data.length) {
						newArr.push(data.splice(0, 6));
					}
					setFavouritesSubSection(newArr);
				})
      },
		[]
	);
	const removeFav = (id) => {
		removeFromFavouritesApi(id).then(()=>{
      const newFavouritesSubSection = favouritesSubSection.map((myArray)=>{
				return myArray.filter((item)=>{
					return item.id !== id;

				})
      })
      setFavouritesSubSection(newFavouritesSubSection)
    })
    .catch(err=>{
      return err;
    })
	}

	return (
		<div style={{marginRight: "1.5em"}}>
			<h1 style={{color: "white", margin:"5vh"}}>Favourites <FavoriteIcon fontSize="3vw" size="large" color="error" /> </h1>
			<Carousel justify-content="center" xs={10}>
				{favouritesSubSection.map((item) => (
					<div key={favouritesSubSection.indexOf(item)} >
						<Grid container spacing={2} className="p-4">
							{item.map((subItem) => (
								<Grid
									key={subItem.url}
									item
									xs={6}
									sm={6}
									md={4}
									lg={4}
								>
									<div className="container " >
										<div className="imageSet">
											<img src={subItem.url} alt="gif here" />
												<DeleteIcon className="fas fa-heart fill-red" color="primary"
												style={{background:
													'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
												onClick={() => {
												removeFav(subItem.id);
											}}
											 />
										</div>
									</div>
								</Grid>
							))}
							</Grid>
					</div>
				))}
			</Carousel>
			<Grid>
				<div className="container mt-4 justify-content-center align-items-center ">
					<Button variant="contained" color="primary" href="#contained-buttons">
						Show All
					</Button>
				</div>
			</Grid>
		</div>
	);
}

