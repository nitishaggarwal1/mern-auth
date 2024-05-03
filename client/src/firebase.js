// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chrome-lambda-413802.firebaseapp.com",
  projectId: "chrome-lambda-413802",
  storageBucket: "chrome-lambda-413802.appspot.com",
  messagingSenderId: "295280129448",
  appId: "1:295280129448:web:808dbf7ebd4ec9b0d4999d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);