// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9rPlekeO4Saprtu6gQp96mgBsBlRaDF4",
    authDomain: "email-password-auth-c73b0.firebaseapp.com",
    projectId: "email-password-auth-c73b0",
    storageBucket: "email-password-auth-c73b0.appspot.com",
    messagingSenderId: "61135436785",
    appId: "1:61135436785:web:9b94fe492d79a59f296250",
    measurementId: "G-YZFV4JYZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;