// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpmKO0eqazmJzsYJk-Rc-n93rLmPwZ-bI",
  authDomain: "paste2-e01a1.firebaseapp.com",
  projectId: "paste2-e01a1",
  storageBucket: "paste2-e01a1.firebasestorage.app",
  messagingSenderId: "72941371661",
  appId: "1:72941371661:web:9bb6f9626e0cac65e5f044",
  measurementId: "G-ZJ2RPVM6MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export { analytics };