import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCSy6g0vnnrEZjRyJISWOO6UWcDbLyAdJ8",
    authDomain: "futsi-8d92a.firebaseapp.com",
    databaseURL: "https://futsi-8d92a.firebaseio.com",
    projectId: "futsi-8d92a",
    storageBucket: "futsi-8d92a.appspot.com",
    messagingSenderId: "539697614813",
    appId: "1:539697614813:web:1668a5874e48a24a"
  };

export function init(){
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized');
  
} 