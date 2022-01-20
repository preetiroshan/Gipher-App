import React, { useState, useEffect } from "react";
import StarIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import './Components.css';
import { useStyles } from "./utils.ts";

export default function Recommendation(props) {
	const classes = useStyles();
	const [recommendation, setRecommendation] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.giphy.com/v1/gifs/search?api_key=5Zrre3drtzoQT2haZQ4OwPPyHyK23hqd&q=funs&limit=24&offset=0&rating=g&lang=en"
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setRecommendation(data.data);
				return data;
			});
	}, []);


	return (
		<div
			className={classes.root}
			style={{ maxWidth: "100%", overflow: "hidden", marginRight: "3em" }}
		>
			<h1 style={{ color: "white", margin: "5vh" }}>
				Recommended GIFs
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
				{recommendation.map((item) => (
					<Grid item xs={6} sm={4} md={3} lg={3} key={item.images.original.url}>
						<div className="container m-2 ">
							<div className="imageSet m-2">
								<img src={item.images.original.url} alt="gif here" />
								<StarIcon color="primary" className="fas fa-heart"
									style={{
										background:
											'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
									}}
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
