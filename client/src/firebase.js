// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2106b.firebaseapp.com",
  projectId: "mern-estate-2106b",
  storageBucket: "mern-estate-2106b.appspot.com",
  messagingSenderId: "319891371485",
  appId: "1:319891371485:web:932b6ecbab8a0a54c27234"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);