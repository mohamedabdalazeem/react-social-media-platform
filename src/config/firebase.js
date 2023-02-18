// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-YMCxFtS8nVZZzo1Vqc7shX9DcKtccOU",
  authDomain: "social-media-platform-95133.firebaseapp.com",
  projectId: "social-media-platform-95133",
  storageBucket: "social-media-platform-95133.appspot.com",
  messagingSenderId: "460975293692",
  appId: "1:460975293692:web:a7a0b4c23efe7259f48379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);