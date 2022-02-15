// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// NOTE: REPLACE THESE WITH YOUR PERSONAL CREDENTIALS. THIS CONFIG DOESN'T WORK ANYMORE
const firebaseConfig = {
  apiKey: "AIzaSyCKL8Qg11UDFZCzukzLSsBcsUJYjdlzIew",
  authDomain: "cs47lecture7a.firebaseapp.com",
  projectId: "cs47lecture7a",
  storageBucket: "cs47lecture7a.appspot.com",
  messagingSenderId: "109670563640",
  appId: "1:109670563640:web:e6d3ad46e06fbb0e60cbcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
