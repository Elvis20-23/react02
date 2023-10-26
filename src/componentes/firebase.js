// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";


import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuvCF3BhGK7sqjZXRt3rKqCJdO-KE5DJ8",
  authDomain: "appreact-b2549.firebaseapp.com",
  projectId: "appreact-b2549",
  storageBucket: "appreact-b2549.appspot.com",
  messagingSenderId: "1079878316312",
  appId: "1:1079878316312:web:372c172ae1f0e04526ee6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);