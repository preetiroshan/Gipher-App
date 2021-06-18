import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@material-ui/core";
// import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromFavouritesApi } from "../services/FavouritesServices";
import { getFavouritesApi } from "../services/getFavourites";
import FavoriteIcon from '@material-ui/icons/Favorite';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
//   }
// }));

export default function FavouritesCarousel() {
	// const classes = useStyles();
	// const [favourites, setFavourites] = useState([]);

	const [favouritesSubSection, setFavouritesSubSection] = useState([]);
	
	useEffect(() => {
			getFavouritesApi()
				.then((data) => {
					// console.log("inside get then")
					//Here we create a 2D array from all the favourite gifs, where maximum length of each sub-array is 6
					const newArr = [];
					while (data.length) {
						newArr.push(data.splice(0, 6));
					}
					setFavouritesSubSection(newArr);
					// console.log(trending);
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

	console.log(favouritesSubSection);

	return (
		<div style={{marginRight: "1.5em"}}>
			<h1 style={{color: "white", margin:"5vh"}}>Favourites <FavoriteIcon fontSize="3vw" size="large" color="error" /> </h1>
			<Carousel justify-content="center" xs={10}>
				{favouritesSubSection.map((item) => (
					<div key={favouritesSubSection.indexOf(item)} >
						<Grid container spacing={2} className="p-4">
							{item.map((subItem) => (
								<Grid
									item
									xs={6}
									sm={6}
									md={4}
									lg={4}
                  key={subItem.url}
                  
								>
									<div className="container " >
										<div className="imageSet">
											<img src={subItem.url} alt="hey" />
											{/* <i
                        className="fas fa-heart"
                        onClick={() => {
                          addToFav(item.images.original.url);
                        }}
                      ></i> */}
											{/* <DeleteIcon color="primary" /> */}
											
                       <DeleteIcon className="fas fa-heart fill-red" color="primary"
                  style={{background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                  onClick={() => {
                  removeFav(subItem.id);
								}} />
										</div>
									</div>
								</Grid>
								//   <Grid item xs={6} sm={2}>
								//   {/* <Paper className={classes.paper}>               */}
								//   <img src={subItem.images.original.url} alt="hey"/>
								//   {/* </Paper> */}
								// </Grid>
							))}

							{/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
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
				{/* This is just for practice...to enable proper scrolling */}
				{/* <div className="container mt-4 justify-content-center align-items-center ">
					<Button variant="contained" color="primary" href="#contained-buttons">
						Show All
					</Button>
				</div>
				<div className="container mt-4 justify-content-center align-items-center ">
					<Button variant="contained" href="#contained-buttons">
					
					</Button>
				</div> */}
			</Grid>
		</div>
	);
}

