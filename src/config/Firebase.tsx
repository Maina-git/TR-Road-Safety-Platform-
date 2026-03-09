// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf-z904IIBept0y-hBBQl0r0xKd4QBR9Q",
  authDomain: "routex-a154a.firebaseapp.com",
  projectId: "routex-a154a",
  storageBucket: "routex-a154a.firebasestorage.app",
  messagingSenderId: "868846554095",
  appId: "1:868846554095:web:10d0849848f5937ae6441a",
  measurementId: "G-2ETNY5NS6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);

