import React, { useState, useEffect } from 'react'
import StarIcon from '@material-ui/icons/StarBorder';
import { Grid } from '@material-ui/core';

export default function SearchResult(props) {

	const [mySearchTerm, setMySearchTerm] = useState(props.mySearchTerm);
	const [results, setResults] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=5Zrre3drtzoQT2haZQ4OwPPyHyK23hqd&q=${mySearchTerm}&limit=24&offset=0&rating=g&lang=en`
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setResults(data.data);
				// console.log(data.data)
				return data;
			});
	}, []);


	console.log(results);

	return (
		<div

			style={{ maxWidth: "100%", overflow: "hidden", marginRight: "7vw" }}
		>
			<h1 style={{ color: "white" }}>
				Results
				<span
					style={{
						textAlign: "end",
						marginTop: "-30px",
						cursor: "pointer",
					}}
				>
				</span>
			</h1>
			{console.log(results)}
			<Grid container spacing={0} className="p-4">
				{results.map((item) => (
					<Grid item xs={6} sm={4} md={3} lg={3} key={item.url}>
						<div className="container m-4 ">
							<div className="imageSet m-2">
								<img src={item.images.original.url} alt="hey" />
								{/* <i
								className="fas fa-heart"
								onClick={() => {
									addToFav(item.images.original.url);
								}}
							></i> */}
								<StarIcon
									style={{
										background:
											'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
									}}
									className="fas fa-heart text-dark fill-red" onClick={() => { props.addToFav(item.images.original) }} />


							</div>
						</div>

					</Grid>
				))}
			</Grid>
		</div>
	);

}
