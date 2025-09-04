// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDreoSc2K9ofeJtHhvLLDU9F4A0v-2c4bQ",
  authDomain: "fv-mobile-app---tracker.firebaseapp.com",
  projectId: "fv-mobile-app---tracker",
  storageBucket: "fv-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "228430931908",
  appId: "1:228430931908:web:4ae01fd8c2740f89f82691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
