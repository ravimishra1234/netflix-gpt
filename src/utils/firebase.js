// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWDfwrRXFHcmJt-SabhmUVkkhaqVQwKuo",
  authDomain: "netflixgpt-ab9f3.firebaseapp.com",
  projectId: "netflixgpt-ab9f3",
  storageBucket: "netflixgpt-ab9f3.firebasestorage.app",
  messagingSenderId: "1061506229024",
  appId: "1:1061506229024:web:b881da16ba3d23dfff6d45",
  measurementId: "G-8BCK95619L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();