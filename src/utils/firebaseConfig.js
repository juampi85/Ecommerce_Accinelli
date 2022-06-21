// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJq11TDdWhLT8x3JhmT4CHgR3d2Z8PsSA",
  authDomain: "ecommerce-accinelli-juan-pablo.firebaseapp.com",
  projectId: "ecommerce-accinelli-juan-pablo",
  storageBucket: "ecommerce-accinelli-juan-pablo.appspot.com",
  messagingSenderId: "378858350314",
  appId: "1:378858350314:web:33e64171fee7ba327c9993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore initialize
const db = getFirestore(app); // lo exportamos para NO estar llamando cada vez que lo necesitemos

export default db;