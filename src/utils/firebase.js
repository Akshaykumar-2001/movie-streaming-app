// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-gpt-e568a.firebaseapp.com",
  projectId: "netflix-clone-gpt-e568a",
  storageBucket: "netflix-clone-gpt-e568a.appspot.com",
  messagingSenderId: "479851868946",
  appId: "1:479851868946:web:8ef429893ff60583fa39cb",
  measurementId: "G-3KRMQXY28N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
