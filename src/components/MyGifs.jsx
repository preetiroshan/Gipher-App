import React, {useEffect, useState} from 'react'
import firebase from 'firebase';
import '../firebase.js'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import './Components.css'
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
export default function MyGifs() {
  const classes = useStyles();
  const[allImageURL, setAllImageURL] = useState([])
  useEffect(()=> {
    // let storageRef = firebase.storage().ref('images')
    // let spaceRef = storageRef.child('images/')
    // console.log(spaceRef);
    let storageRef = firebase.storage().ref("images");

    
    // Now we get the references of these images
    const newImgArray = []
    storageRef.listAll()
    .then((result) => {
      result.items.forEach((imageRef)=> {
        // And finally display them
        // displayImage(imageRef);
        imageRef.getDownloadURL().then(function(url) {
          console.log(result.items.length);
          const arrLen = result.items.length;
          const myArr = result.items;
          console.log(url);
          newImgArray.push(url);
          console.log(newImgArray);
          console.log("myArr is : ", myArr);
          
          console.log(imageRef);
          if(newImgArray.indexOf(url)===(arrLen-1)){
            console.log('adding')
            setAllImageURL(newImgArray)
          }
          else{
            console.log("not adding");
          }
        
        })
        // .then(()=>{
        //   console.log(allImageURL);
        //   // setAllImageURL(newImgArray)
        // })
        // .then(()=>{
        //   console.log(allImageURL);
        // })
        .catch((err) => {
          // Handle any errors
          console.log(err);
  
        });
      })      
    })
  
  }, [])
  return (
<div
			className={classes.root}
			style={{ maxWidth: "100%", overflow: "hidden",  margin: "6vw", marginTop: "0.5em" }}
		>
			<h1 style={{color: "white", margin:"1em", marginTop: "0"}}>
				My Gifs
				<span
					style={{
						textAlign: "end",
						marginTop: "-30px",
						cursor: "pointer",
					}}
				>
				</span>
			</h1>
			<Grid container className="justify-content-center" spacing={0}>
				{allImageURL.map((imgUrl) => (
					<Grid item xs={6} sm={4} md={3} lg={3} key={allImageURL.indexOf(imgUrl)}>
						<div className="container m-2 ">
							<div className="imageSet m-2">
              <img style={{width:"30vh", height: "30vh"}} src={imgUrl} alt="alternate" />
                
              </div>
						</div>
					
					</Grid>
				))}
			</Grid>
		</div>

    // <div>
    //   {
    //     allImageURL.map((imgUrl) => (
    //       <div>
    //         <img style={{width:"20vh", height: "20vh"}} src={imgUrl} alt="alternate" />
    //       </div>
    //     ))
    //   }
    // </div>
  )
}
