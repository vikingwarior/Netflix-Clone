// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFg0Wws5IJGVf__mxCWmNxxBBn6AYw6SQ",
  authDomain: "netflix-clone-2309.firebaseapp.com",
  projectId: "netflix-clone-2309",
  storageBucket: "netflix-clone-2309.appspot.com",
  messagingSenderId: "361690651250",
  appId: "1:361690651250:web:a079579ff916c1fe9040eb",
  measurementId: "G-RRXEV9XJSD"
};

// Initialize Firebase
// eslint-disable-next-line
initializeApp(firebaseConfig);


export const auth = getAuth();