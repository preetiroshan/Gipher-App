import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";

// import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
// import { Typography } from 'antd';
// import Typography from "@material-ui/core/Typography";
// import { useEffect } from 'react';
import "./Components.css";
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

export default function Technology(props) {
	const classes = useStyles();
	const [technology, setTechnology] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.giphy.com/v1/gifs/search?api_key=5Zrre3drtzoQT2haZQ4OwPPyHyK23hqd&q=technology&limit=24&offset=0&rating=g&lang=en"
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setTechnology(data.data);
				return data;
			});
	}, []);

	return (
		<div
			className={classes.root}
			style={{ maxWidth: "100%", overflow: "hidden",  marginRight: "3em" }}
		>
			<h1 style={{color: "white", margin:"5vh"}}>
				Technology
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
				{technology.map((item) => (
					<Grid item xs={6} sm={4} md={3} lg={3} key={item.images.original.url}>
						<div className="container m-2 ">
							<div className="imageSet m-2">
              <img src={item.images.original.url} alt="hey"  />
							{/* <i
								className="fas fa-heart"
								onClick={() => {
									addToFav(item.images.original.url);
								}}
							></i> */}
                  <StarIcon className="fas fa-heart fill-red" color="primary"
                  style={{background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                  onClick={() => {
                  props.addToFav(item.images.original);
                  
								}} />
                
              </div>
						</div>
					
					</Grid>
				))}
			</Grid>
		</div>
	);
}
