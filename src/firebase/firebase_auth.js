// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCapIk3UP_TXAz5BchKQ8TqFCJqynFH38I",
  authDomain: "box2box-423b9.firebaseapp.com",
  databaseURL: "https://box2box-423b9-default-rtdb.firebaseio.com",
  projectId: "box2box-423b9",
  storageBucket: "box2box-423b9.appspot.com",
  messagingSenderId: "657733693683",
  appId: "1:657733693683:web:c70637a022be8881718786"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const firebase_auth = getAuth(app);