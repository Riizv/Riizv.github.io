import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8Zb2nxAQ9hZjDlYggpYVK7VRY8Nlz1jc",
  authDomain: "ardu-c44a3.firebaseapp.com",
  databaseURL: "https://ardu-c44a3.firebaseio.com",
  projectId: "ardu-c44a3",
  storageBucket: "ardu-c44a3.appspot.com",
  messagingSenderId: "526504033931",
  appId: "1:526504033931:web:45b7cc2d8d701d39f5de8e",
  measurementId: "G-C8YXZMZKKY",
});

const base = firebaseApp.database();

export default base;
