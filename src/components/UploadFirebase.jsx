import React, { useState } from 'react'
import firebase from 'firebase';
import '../firebase.js'
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
// import BackupIcon from '@material-ui/icons/Backup';
// import MyGifs from './MyGifs.jsx';
// import firebase from './'
// import { VerticalAlignBottom } from '@material-ui/icons';



export default function UploadFirebase() {
  const[files, setFiles] = useState(null)
  const history = useHistory()
  // constructor(props){
  //   super(props);
  //   this.state={
  //     files:null
  //   }
  // }
  
  const handleChange = (files)=>{
    // this.setState({
    //   files: files
    // })
    setFiles(files)
  }

  const handleSave = async  () => {
    let bucketName = 'images'
    let file = files[0]
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
    let uploadTask = storageRef.put(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED ,
      async()=>{
        let downloadURL =await uploadTask.snapshot.ref.getDownloadURL()
        console.log(downloadURL);
        // const myObject = {
        //   downloadURL : downloadURL
        // }
        history.push('/myGifs')
      }
      )
  }
    return (
      <div style={{marginRight: "1.5em"}}>
       <div className="jumbotron m-4">
       <h2>Upload your favourite Gifs and access them anytime, anywhere!<span style={{fontSize:"100px"}}>&#128526;</span></h2>
        <div className="d-flex justify-content-center">
        {/* <Button variant="contained" className="m-1" color="primary" onClick={()=>{handleSave()}}>
					<input type="file" onChange={(e)=>{handleChange(e.target.files)}} />
        </Button> */}
        <div className="m-1" style={{background:"3f51b5"}}>
        <input type="file" onChange={(e)=>{handleChange(e.target.files)}} />

        </div>
        {/* <button onClick={()=>{handleSave()}}>Upload <i class="fas fa-upload"></i> </button> */}
        <Button size="small" variant="contained" className="m-1" color="secondary" onClick={()=>{handleSave()}}>
						Upload <i className="fas fa-upload"></i>
					</Button>
        </div>
         
        {/* <button onClick={this.showImage}>Show Image</button>
        <button onClick={this.showAll}>Show All</button>
        <img id="new-img" alt="alternate" /> */}
        {/* <MyGifs /> */}
       </div>
      </div>
    )

}
