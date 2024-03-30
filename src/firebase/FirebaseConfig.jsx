// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy3xluL4d7RDcIT7rh4RNm0ZWrseWBMe0",
    authDomain: "qoqiqaz7.firebaseapp.com",
    projectId: "qoqiqaz7",
    storageBucket: "qoqiqaz7.appspot.com",
    messagingSenderId: "850938383658",
    appId: "1:850938383658:web:f8d90558ef56953454e253"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }