// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-firebase-cfa74.firebaseapp.com",
  projectId: "blog-firebase-cfa74",
  storageBucket: "blog-firebase-cfa74.appspot.com",
  messagingSenderId: "654039807975",
  appId: "1:654039807975:web:cce1f9ccca8eb81240af42",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
