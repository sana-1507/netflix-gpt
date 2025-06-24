// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARSAZJzgNraFsbf6861v5DaqduiPs-TFQ",
  authDomain: "netflix-gpt-b63e6.firebaseapp.com",
  projectId: "netflix-gpt-b63e6",
  storageBucket: "netflix-gpt-b63e6.firebasestorage.app",
  messagingSenderId: "49668884827",
  appId: "1:49668884827:web:6281b358258086ffd7b27e",
  measurementId: "G-LYKNKN1QC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// export const createUserWithEmailAndPassword = createUserWithEmailAndPassword();