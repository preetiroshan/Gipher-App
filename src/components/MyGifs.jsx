import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import '../firebase.js'
import { useStyles } from "./utils.ts";
import Grid from "@material-ui/core/Grid";
import './Components.css';

export default function MyGifs() {
  const classes = useStyles();
  const [allImageURL, setAllImageURL] = useState([])

  useEffect(() => {
    let storageRef = firebase.storage().ref("images");
    // Now we get the references of these images
    const newImgArray = []
    storageRef.listAll()
      .then((result) => {
        result.items.forEach((imageRef) => {
          // And finally display them
          // displayImage(imageRef);
          imageRef.getDownloadURL().then(function (url) {
            const arrLen = result.items.length;
            newImgArray.push(url);
            if (newImgArray.indexOf(url) === (arrLen - 1)) {
              setAllImageURL(newImgArray)
            }
            else {
            }

          })
            .catch((err) => {
              console.log(err);
            });
        })
      })

  }, [])
  return (
    <div
      className={classes.root}
      style={{ maxWidth: "100%", overflow: "hidden", margin: "6vw", marginTop: "0.5em" }}
    >
      <h1 style={{ color: "white", margin: "1em", marginTop: "0" }}>
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
                <img style={{ width: "30vh", height: "30vh" }} src={imgUrl} alt="alternate" />

              </div>
            </div>

          </Grid>
        ))}
      </Grid>
    </div>
  )
}
