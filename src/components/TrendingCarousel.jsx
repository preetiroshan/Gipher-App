import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";

export default function TrendingCarousel(props) {
	const history = useHistory();
	const [trendingSubSection, setTrendingSubSection] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.giphy.com/v1/gifs/trending?api_key=5Zrre3drtzoQT2haZQ4OwPPyHyK23hqd&limit=24&rating=g"
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				const newArr = [];
				while (data.data.length) {
					newArr.push(data.data.splice(0, 4));
				}
				setTrendingSubSection(newArr);
			});
	}, []);

	const showAllTrending = () => {
		history.push("/trending");
	};

	return (
		<div style={{ marginRight: "1.5em" }}>
			<h1 style={{ color: "white", marginRight: "15vw", marginLeft: "3.2em" }}>
				Trending
			</h1>
			<Carousel justify-content="center" xs={10}>
				{trendingSubSection.map((item) => (
					<div key={trendingSubSection.indexOf(item)}>
						<Grid container spacing={2} className="p-4">
							{item.map((subItem) => (
								<Grid
									item
									xs={6}
									sm={6}
									md={3}
									lg={3}
									key={subItem.images.original.url}
								>
									<div className="container ">
										<div className="imageSet">
											<img src={subItem.images.original.url} alt="gif here" />

											<StarIcon
												className="fas fa-heart fill-red "
												color="primary"
												style={{
													background:
														"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
												}}
												onClick={() => {
													props.addToFav(subItem.images.original);
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
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							showAllTrending();
						}}
					>
						Show All
					</Button>
				</div>
			</Grid>
		</div>
	);
}
