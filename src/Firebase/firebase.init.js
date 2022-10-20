// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH3-A7hgPlTP8VgWhjWePZ8COGBeP9-8U",
  authDomain: "email-and-password-auth-baa4e.firebaseapp.com",
  projectId: "email-and-password-auth-baa4e",
  storageBucket: "email-and-password-auth-baa4e.appspot.com",
  messagingSenderId: "20737915631",
  appId: "1:20737915631:web:8c6a16cc14f6e36ac7391a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;