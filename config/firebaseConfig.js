// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCamMvs5aCP_E3ZwYSsxamWCtmvWuObkj8",
  authDomain: "dine-time-3bcc7.firebaseapp.com",
  projectId: "dine-time-3bcc7",
  storageBucket: "dine-time-3bcc7.firebasestorage.app",
  messagingSenderId: "974194798024",
  appId: "1:974194798024:web:6a437a218a0306dc91e4fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
