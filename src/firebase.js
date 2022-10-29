// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5-g1ngFO3Mp2yMLSkIx7O_Lj9Sg6NkE",
  authDomain: "pocketful-auth.firebaseapp.com",
  projectId: "pocketful-auth",
  storageBucket: "pocketful-auth.appspot.com",
  messagingSenderId: "431376804082",
  appId: "1:431376804082:web:f1fdece210de0b6f78086b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
