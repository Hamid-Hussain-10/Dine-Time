// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your API key",
  authDomain: "your-project-name.firebaseapp.com",
  projectId: "dine-time-28a65",
  storageBucket: "your-project-name.firebasestorage.app",
  messagingSenderId: "eer1212",
  appId: "1:1234:web:1234",
  measurementId: "G-223",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);