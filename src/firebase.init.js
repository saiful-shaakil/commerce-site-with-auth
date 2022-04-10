// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTYbdlzCl2CZEwVGTodVY4AAXXBVT9IL0",
  authDomain: "commerce-site-spa--ema-john.firebaseapp.com",
  projectId: "commerce-site-spa--ema-john",
  storageBucket: "commerce-site-spa--ema-john.appspot.com",
  messagingSenderId: "568878346018",
  appId: "1:568878346018:web:2554047d7d6b55b4faff7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
