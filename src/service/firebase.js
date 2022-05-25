// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqD9HbYek1RXSNQm_6G7oug3tHHbGm1qc",
  authDomain: "sama-felipe-sampedro.firebaseapp.com",
  projectId: "sama-felipe-sampedro",
  storageBucket: "sama-felipe-sampedro.appspot.com",
  messagingSenderId: "293092528995",
  appId: "1:293092528995:web:3b231dd1ab4d444c9df956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db