// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const env = getEnvironments();
console.log(env);

// Your web app's Firebase configuration - Production

// const firebaseConfig = {
//   apiKey: "AIzaSyAG4xaUEDFF4EJgRpk4JjKCXgOCVHR7uRc",
//   authDomain: "react-cursos-1d59d.firebaseapp.com",
//   projectId: "react-cursos-1d59d",
//   storageBucket: "react-cursos-1d59d.appspot.com",
//   messagingSenderId: "711085741506",
//   appId: "1:711085741506:web:e27a77a2f86068fda6f25b"
// };

// Firebase testing allow read and write

const firebaseConfig = {
  apiKey: "AIzaSyA5kQTICvD29fGhDKO91Ukez8WEtYgb-cw",
  authDomain: "react-firebase-testing-f3741.firebaseapp.com",
  projectId: "react-firebase-testing-f3741",
  storageBucket: "react-firebase-testing-f3741.appspot.com",
  messagingSenderId: "207768173382",
  appId: "1:207768173382:web:e3ed86bca8ab2fe50fc347",
  measurementId: "G-S2W98S6HXZ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

