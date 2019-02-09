import firebase from 'firebase';

 const config = {
   apiKey: "AIzaSyCCboHdRg-SjWtdevkHGDIgoa6A8YytKhY",
   authDomain: "wilo-ab9d0.firebaseapp.com",
   databaseURL: "https://wilo-ab9d0.firebaseio.com",
   projectId: "wilo-ab9d0",
   storageBucket: "wilo-ab9d0.appspot.com",
   messagingSenderId: "71184381103"
 };

 firebase.initializeApp(config);

 export default firebase;

 export const database = firebase.database();
 export const auth = firebase.auth();
 export const storage = firebase.storage();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
