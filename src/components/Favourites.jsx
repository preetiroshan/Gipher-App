import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import StarIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';

// import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
// import { Typography } from 'antd';
// import Typography from "@material-ui/core/Typography";
// import { useEffect } from 'react';
import './Components.css'
import { getFavouritesApi } from "../services/getFavourites";
import { removeFromFavouritesApi } from "../services/FavouritesServices";
// import { addToFavouriteApi } from "../services/addToFavourites";
// import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Favourites() {
	const classes = useStyles();
	const [favourites, setFavourites]= useState([]);
	useEffect(() => {
		getFavouritesApi()
			.then((data) => {
        // setFavourites(data.favourites);
        // console.log("near set favourite");
        console.log(data);
        setFavourites(data)
				return data;
			});
	}, []);

	const removeFav = (id) => {
    removeFromFavouritesApi(id).then(()=>{
      const newFavourites = favourites.filter((item)=>{
        return item.id !== id;
      })
      setFavourites(newFavourites)
    })
    .catch(err=>{
      return err;
    })
	}
	console.log(favourites);

	return (
		<div
			className={classes.root}
			style={{ maxWidth: "100%", overflow: "hidden",  marginRight: "7vw" }}
		>
			<h1 style={{color: "white"}}>
				Favourites
				<span
					style={{
						textAlign: "end",
						marginTop: "-30px",
						cursor: "pointer",
					}}
				>
				</span>
			</h1>
			<Grid container spacing={0} className="p-4">
				{favourites.map((item) => (
					<Grid item xs={6} sm={4} md={3} lg={3} key={item.url}>
						<div className="container m-4 ">
							<div className="imageSet m-2">
              <img src={item.url} alt="hey"  />
							{/* <i
								className="fas fa-heart"
								onClick={() => {
									addToFav(item.images.original.url);
								}}
							></i> */}
							<DeleteIcon className="fas fa-heart fill-red"
                  style={{background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                  onClick={() => {
                  removeFav(item.id);
								}} />

                
              </div>
						</div>
					
					</Grid>
				))}
			</Grid>
		</div>
	);
}
