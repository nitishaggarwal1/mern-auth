// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-ccdc8.firebaseapp.com",
  projectId: "mernauth-ccdc8",
  storageBucket: "mernauth-ccdc8.appspot.com",
  messagingSenderId: "683796311691",
  appId: "1:683796311691:web:e716754f5b942a4c3b6e8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);