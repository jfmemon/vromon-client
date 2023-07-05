// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

//   apiKey: "AIzaSyDAp5ZXP3S4o5gQiQPw-BP7TXZJXTPjJr8",
//   authDomain: "vromon-client-d51ab.firebaseapp.com",
//   projectId: "vromon-client-d51ab",
//   storageBucket: "vromon-client-d51ab.appspot.com",
//   messagingSenderId: "425805939943",
//   appId: "1:425805939943:web:b27f123b32f246a12b8e42"