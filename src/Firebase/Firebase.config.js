// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvx1jzY-kNwrCC4g1COYQzHQmbNz4H1Jo",
    authDomain: "skill-swap-9152c.firebaseapp.com",
    projectId: "skill-swap-9152c",
    storageBucket: "skill-swap-9152c.firebasestorage.app",
    messagingSenderId: "976702053175",
    appId: "1:976702053175:web:75c9a1cb64ff54869698b2",
    measurementId: "G-70K12719XV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app;
