"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63di3vgReGl5BXHLUxTaDpSLWtMLRlBA",
  authDomain: "hardcoregame-9528f.firebaseapp.com",
  projectId: "hardcoregame-9528f",
  storageBucket: "hardcoregame-9528f.appspot.com",
  messagingSenderId: "629402734073",
  appId: "1:629402734073:web:3b3689049db9ee1f8cc128"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 
export {auth, db};


