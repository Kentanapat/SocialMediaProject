// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ6YtTVDGd3mn7sFjn3oeY_g2zGqWhiQA",
  authDomain: "firstapp-d478f.firebaseapp.com",
  projectId: "firstapp-d478f",
  storageBucket: "firstapp-d478f.appspot.com",
  messagingSenderId: "972583484996",
  appId: "1:972583484996:web:6df2fc1a615c5ba3024611",
  measurementId: "G-N3CVER0EBL"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;

