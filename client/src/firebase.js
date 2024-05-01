// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-bb983.firebaseapp.com",
  projectId: "auth-bb983",
  storageBucket: "auth-bb983.appspot.com",
  messagingSenderId: "637515823192",
  appId: "1:637515823192:web:e429205f0c0bec86ae722d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);