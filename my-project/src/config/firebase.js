// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD3ic9Kc8j9yLASFvc9ctaGHPZmLLeSdkk",
  authDomain: "loginpage-6a814.firebaseapp.com",
  projectId: "loginpage-6a814",
  storageBucket: "loginpage-6a814.appspot.com",
  messagingSenderId: "571242500174",
  appId: "1:571242500174:web:ff52c4bbeec1426120331f",
  measurementId: "G-G51RJ5QGSJ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)       
