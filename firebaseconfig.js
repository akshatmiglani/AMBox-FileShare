// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKtkmW_Mh9QEgWtVBA61ggqwNVa-8Lj9s",
  authDomain: "ambox-7f1ed.firebaseapp.com",
  projectId: "ambox-7f1ed",
  storageBucket: "ambox-7f1ed.appspot.com",
  messagingSenderId: "618665168947",
  appId: "1:618665168947:web:c9d893c051b38b53dc1346",
  measurementId: "G-6EF9120BRG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
