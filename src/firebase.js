import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCw4O4-NZiMU_MEo_cb2AoNBM3GnBPkvkY",
  authDomain: "react-slack-app-17c80.firebaseapp.com",
  databaseURL: "https://react-slack-app-17c80.firebaseio.com",
  projectId: "react-slack-app-17c80",
  storageBucket: "react-slack-app-17c80.appspot.com",
  messagingSenderId: "136288139714",
  appId: "1:136288139714:web:c9f59fd71003b547403e5b",
  measurementId: "G-7MT1X4TZJ5"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
