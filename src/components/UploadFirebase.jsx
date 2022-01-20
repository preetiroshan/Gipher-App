import React, { useState } from 'react'
import firebase from 'firebase';
import '../firebase.js'
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function UploadFirebase() {
  const [files, setFiles] = useState(null)
  const history = useHistory();

  const handleChange = files => setFiles(files)

  const handleSave = async () => {
    let bucketName = 'images'
    let file = files[0]
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
    let uploadTask = storageRef.put(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      async () => {
        let downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
        console.log(downloadURL);
        history.push('/myGifs')
      }
    )
  }
  return (
    <div style={{ marginRight: "1.5em" }}>
      <div className="jumbotron m-4">
        <h2>
          Upload your favourite Gifs and access them anytime, anywhere!
          <span style={{ fontSize: "100px" }}>&#128526;</span>
        </h2>
        <div className="d-flex justify-content-center">
          <div className="m-1" style={{ background: "3f51b5" }}>
            <input
              type="file"
              onChange={(e) => { handleChange(e.target.files) }}
            />
          </div>
          <Button
            size="small"
            variant="contained"
            className="m-1"
            color="secondary"
            onClick={() => { handleSave() }}
          >
            Upload
            <i className="fas fa-upload"></i>
          </Button>
        </div>
      </div>
    </div>
  )
}
