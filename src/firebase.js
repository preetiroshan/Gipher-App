import firebase from 'firebase';

const config ={
  apiKey: "AIzaSyBy0OGLsz7V7LQXJTACsclZKo8ZOAJrB60",
    authDomain: "gipher-app.firebaseapp.com",
    projectId: "gipher-app",
    storageBucket: "gipher-app.appspot.com",
    messagingSenderId: "743588833318",
    appId: "1:743588833318:web:c89871a4d5c026b9e35ee7"
  };
firebase.initializeApp(config)
export default firebase
