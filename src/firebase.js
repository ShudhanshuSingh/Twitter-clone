import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDr9B_Ddz5EOa_f0rGkNdB9uAnv3p2xbic",
//     authDomain: "twitter-clone-1a751.firebaseapp.com",
//     databaseURL: "https://twitter-clone-1a751.firebaseio.com",
//     projectId: "twitter-clone-1a751",
//     storageBucket: "twitter-clone-1a751.appspot.com",
//     messagingSenderId: "350421204127",
//     appId: "1:350421204127:web:5a4e12160d054f129276aa",
//     measurementId: "G-KB6TRHRGRK"
//   };

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDr9B_Ddz5EOa_f0rGkNdB9uAnv3p2xbic",
    authDomain: "twitter-clone-1a751.firebaseapp.com",
    databaseURL: "https://twitter-clone-1a751.firebaseio.com",
    projectId: "twitter-clone-1a751",
    storageBucket: "twitter-clone-1a751.appspot.com",
    messagingSenderId: "350421204127",
    appId: "1:350421204127:web:5a4e12160d054f129276aa",
    measurementId: "G-KB6TRHRGRK"
  })

  const db = firebase.firestore();
  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;