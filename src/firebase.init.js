// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXI95spXRkdrLzn2MVt3gSzLclYx6ffu4",
  authDomain: "fir-auth-core-practice.firebaseapp.com",
  projectId: "fir-auth-core-practice",
  storageBucket: "fir-auth-core-practice.appspot.com",
  messagingSenderId: "1740891842",
  appId: "1:1740891842:web:e24f33b91d1722520d3d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;